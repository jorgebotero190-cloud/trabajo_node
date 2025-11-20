const vscode = require('vscode');

function activate(context) {
	vscode.languages.registerHoverProvider('jvav', {
		provideHover(document, position, token) {
		  return {
			contents: ['JvavCode']
		  };
		}
	  });
    let disposable = vscode.commands.registerCommand('Jvavscode.compile', function () {
		// The code you place here will be executed every time your command is executed
		let terminal = vscode.window.createTerminal({name: "Jvavscode"});
		terminal.show(true);
		const Path = vscode.window.activeTextEditor.document.fileName;
		let cmd = "jcp -c "+Path;
		terminal.sendText(cmd);
		//terminal.sendText("jcp -c ${file}");
		// Display a message box to the user
		vscode.window.showInformationMessage('Compiling');
	});
	context.subscriptions.push(disposable);

	let disposable2 = vscode.commands.registerCommand('Jvavscode.p', function () {
		// The code you place here will be executed every time your command is executed
		let terminal = vscode.window.createTerminal({name: "Jvavscode"});
		terminal.show(true);
		const Path = vscode.window.activeTextEditor.document.fileName;
		let oxname = vscode.window.activeTextEditor.document.fileName;
		oxname = oxname.slice(0,oxname.length-5);
		let cmd = "jcp -o "+Path+" "+oxname;
		terminal.sendText(cmd);
		//terminal.sendText("jcp -c ${file}");
		// Display a message box to the user
		vscode.window.showInformationMessage('Making Package');
	});
	context.subscriptions.push(disposable2);
}
exports.activate = activate;

function deactivate() {
}
exports.deactivate = deactivate;