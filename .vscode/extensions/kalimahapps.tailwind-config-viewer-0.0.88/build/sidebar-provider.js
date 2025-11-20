"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarProvider = void 0;
const node_path_1 = __importDefault(require("node:path"));
const vscode_1 = require("vscode");
const tailwind_config_1 = require("./tailwind-config");
class SidebarProvider {
    extensionUri;
    workspaceRoot;
    static viewType = 'KalimahApps.tailwindcss-config-viewer';
    webView;
    constructor(extensionUri, workspaceRoot) {
        this.extensionUri = extensionUri;
        this.workspaceRoot = workspaceRoot;
        this.workspaceRoot = workspaceRoot;
    }
    sendMessage(command, payload) {
        this.webView.webview.postMessage({
            command,
            payload,
        });
    }
    /**
     * Update the webview content
     */
    async updateConfigData() {
        try {
            let workspacePath = this.workspaceRoot;
            const configWorkspacePath = vscode_1.workspace.getConfiguration('tailwindConfigViewer').get('workspacePath');
            if (configWorkspacePath !== '') {
                const isAbsolute = node_path_1.default.isAbsolute(configWorkspacePath);
                workspacePath = isAbsolute ?
                    configWorkspacePath :
                    node_path_1.default.resolve(workspacePath, configWorkspacePath);
            }
            const tailwindConfigInstance = new tailwind_config_1.TailwindConfig(workspacePath);
            const tailwindResolvedConfig = await tailwindConfigInstance.getConfig();
            this.sendMessage('init', tailwindResolvedConfig);
        }
        catch (error) {
            const { name, message } = error;
            vscode_1.window.showErrorMessage(message);
            if (name === 'FileNotFoundException') {
                this.sendMessage('error', message);
            }
            console.error(' --- ERROR----', error);
        }
    }
    /**
     * Resolve the webview view and add the html
     *
     * @param {WebviewView}               webviewView The webview view instance
     * @param {WebviewViewResolveContext} context     The webview view context
     * @param {CancellationToken}         token       The cancellation token
     */
    resolveWebviewView(webviewView, context, token) {
        this.webView = webviewView;
        // Display a message when the webview is first loaded
        this.updateConfigData();
        // Update the content based on view changes
        webviewView.onDidChangeVisibility(() => {
            if (webviewView.visible === true) {
                this.updateConfigData();
            }
        });
        webviewView.webview.options = {
            // Allow scripts in the webview
            enableScripts: true,
            localResourceRoots: [this.extensionUri],
        };
        // Add html
        webviewView.webview.html = this.getHtmlForWebview(webviewView.webview);
        // Handle messages from the webview
        webviewView.webview.onDidReceiveMessage((data) => {
            const { command, text } = data;
            switch (command) {
                case 'refresh': {
                    vscode_1.window.showErrorMessage('UPDATED');
                    this.updateConfigData();
                    break;
                }
                default: {
                    break;
                }
            }
        });
    }
    /**
     * Generate webview html
     *
     * @param  {Webview} webview The webview instance
     * @return {string}          The html
     */
    getHtmlForWebview(webview) {
        const vueFile = webview.asWebviewUri(vscode_1.Uri.joinPath(this.extensionUri, 'client-build', 'assets', 'main.js'));
        const stylesPathMainPath = webview.asWebviewUri(vscode_1.Uri.joinPath(this.extensionUri, 'client-build', 'assets', 'style.css'));
        // Use a nonce to only allow a specific script to be run.
        const nonce = this.getNonce();
        return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<!--
					Use a content security policy to only allow loading styles from our extension directory,
					and only allow scripts that have a specific nonce.
					(See the 'webview-sample' extension sample for img-src content security policy examples)
				-->
				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource}; script-src 'nonce-${nonce}';">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
 				<link rel="stylesheet" href="${stylesPathMainPath}" />
				<title>Cat Colors</title>
			</head>
			<body>
				<div id="app"></div>

				<script type="module" nonce="${nonce}" src="${vueFile}"></script>
			</body>
			</html>`;
    }
    /**
     * Get a random nonce
     *
     * @return {string} Nonce
     */
    getNonce() {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let index = 0; index < 32; index++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}
exports.SidebarProvider = SidebarProvider;
