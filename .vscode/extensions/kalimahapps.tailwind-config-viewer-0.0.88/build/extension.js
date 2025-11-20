"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode_1 = require("vscode");
const sidebar_provider_1 = require("./sidebar-provider");
/**
 * Call when extension is activated
 *
 * @param {ExtensionContext} context Extension context
 */
const activate = async function (context) {
    const workspacePath = vscode_1.workspace.workspaceFolders[0].uri.fsPath;
    const provider = new sidebar_provider_1.SidebarProvider(context.extensionUri, workspacePath);
    context.subscriptions.push(vscode_1.window.registerWebviewViewProvider(sidebar_provider_1.SidebarProvider.viewType, provider));
    const isMesasgeDisplayed = context.globalState.get('twitter-message-displayed');
    if (isMesasgeDisplayed === undefined) {
        const goToTwitter = 'Follow me on Twitter!';
        const selection = await vscode_1.window.showInformationMessage('🎉 Thanks for using Tailwind Config Viewer', goToTwitter);
        if (selection === goToTwitter) {
            const twitterUrl = 'https://twitter.com/kalimahapps';
            vscode_1.env.openExternal(vscode_1.Uri.parse(twitterUrl));
        }
        context.globalState.update('twitter-message-displayed', true);
    }
};
exports.activate = activate;
