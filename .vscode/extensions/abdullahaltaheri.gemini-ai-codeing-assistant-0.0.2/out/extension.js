"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
const generative_ai_1 = require("@google/generative-ai");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const MODEL_NAME = "gemini-pro";
function activate(context) {
    let disposable = vscode.commands.registerCommand("extension.performAction", performAction);
    let storeApiKey = vscode.commands.registerCommand("gemini-ai-codeing-assistant.storeApiKey", async () => {
        vscode.window
            .showInputBox({
            prompt: "Store Gemini Pro Api Key",
            password: true,
        })
            .then((apiKey) => {
            if (apiKey) {
                vscode.workspace.getConfiguration("geminiApiKey").update("key", apiKey, true);
                vscode.window.showInformationMessage("Gemini Api Key Saved!");
            }
        });
    });
    context.subscriptions.push(storeApiKey, disposable);
}
exports.activate = activate;
function addLineNumbers(text) {
    const lines = text.split("\n");
    const numberedLines = lines.map((line, index) => `${index + 1}: ${line}`);
    return numberedLines.join("\n");
}
function performAction() {
    // Get the active text editor
    const editor = vscode.window.activeTextEditor;
    if (editor) {
        // Show loading notification
        vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: "Generating AI code...",
            cancellable: false,
        }, async (progress) => {
            try {
                progress.report({ increment: 0 });
                const language = editor.document.languageId;
                const fileTextWithLineNumbers = addLineNumbers(editor.document.getText());
                const currentLineText = editor.document.lineAt(editor.selection.active.line).text.trim();
                const lineNumber = editor.selection.active.line + 1;
                // Generate the code
                const generatedCode = await generateCode(fileTextWithLineNumbers, lineNumber, currentLineText, language);
                // Insert the generated code at the current cursor position
                editor.insertSnippet(new vscode.SnippetString("\n" + generatedCode), editor.selection.active);
                vscode.window.showInformationMessage("AI Code Generated!");
            }
            catch (error) {
                vscode.window.showErrorMessage("Error generating code: " + error?.message);
            }
        });
    }
}
async function generateCode(fileTextWithLineNumbers, lineNumber, currentLineText, language) {
    const API_KEY = vscode.workspace.getConfiguration("geminiApiKey").get("key");
    const genAI = new generative_ai_1.GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
    const workspaceFolder = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
    const packageJsonPath = path.join(workspaceFolder || "", "package.json");
    let projectName = "";
    let projectType = "";
    try {
        const packageJsonContent = fs.readFileSync(packageJsonPath, "utf8");
        const packageJson = JSON.parse(packageJsonContent);
        projectName = packageJson.name || "";
        projectType = packageJson.dependencies && packageJson.dependencies.react ? "React" : "Node.js";
    }
    catch (error) {
        console.error("Error reading package.json:", error);
    }
    const prompt = `
  File project with line numbers:
  ${fileTextWithLineNumbers} You are in line ${lineNumber}.
  I want to replace: "${currentLineText}" with actual working code.
  AND DON'T REWRITE THE WHOLE function/class/etc... just the code needed in that scope.
  Giving this information:
    Project Name: "${projectName}"
    Project Type: "${projectType}"
    Project Programming Language: ${language}.
  Do the following exactly: 
    Replace the comment "${currentLineText}" with actual code, just the code without any additional lines, and the code SHOULD NOT be wrapped in code blocks (i.e., \`\`\`).`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
}
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map