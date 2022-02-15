// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as grpc from '@grpc/grpc-js'
import { SendNotificationReply,  SendNotificationRequest ,RemoveContainerRequest,ContainerTimeReply} from './proto/dockerGet/dockerGet_pb';
import { DockerClient } from './proto/dockerGet/dockerGet_grpc_pb';



function sendNotification(title:string, body:string)
{
	var target= process.env.APIIP!;
	var client = new DockerClient(
		target,
		grpc.credentials.createInsecure());
	var docReq = new SendNotificationRequest();
    docReq.setTitle(title)
    docReq.setBody(body) 

    docReq.setSender(process.env.USER_THIS!)
    docReq.setReceiver(process.env.USER_RESPONSIBLE!)
    docReq.setAllowReply(true)
	docReq.setSessionKey(process.env.SESSION_KEY!)
	client.sendNotification(docReq, function(err, GoLangResponse: SendNotificationReply) {
		if(!GoLangResponse.getSuccess()){
			vscode.window.showInformationMessage("Failed to send Comment, Reason: "+GoLangResponse.getMessage() );
		}else{
			vscode.window.showInformationMessage("Comment Sent!");	
		}
	}
	)

}

type containerTime =
|{
	Success:true
	Message:string
	IsExam:boolean
	TimeLimit:string
	CreatedAt:string
}|{
	Success:false
	Message:string
}
 
function getContainerTime():containerTime{
	var target= process.env.APIIP!;
	var client = new DockerClient(
		target,
		grpc.credentials.createInsecure());
	var docReq = new RemoveContainerRequest();
    docReq.setContainerid(process.env.THIS_CONTAINER_ID!)
	docReq.setSub(process.env.USER_SUB!)
	docReq.setSessionKey(process.env.SESSION_KEY!)
	client.getContainerTime(docReq, function(err, GoLangResponse: ContainerTimeReply) {
		if(!GoLangResponse.getSuccess()){
			vscode.window.showInformationMessage("Failed to get container time, Reason: "+GoLangResponse.getMessage() );
			return {
				Success:false,
				Message:GoLangResponse.getMessage() ,
			}
		}else{
			vscode.window.showInformationMessage("Container Time got!");	
			return {
				Success:true,
				Message:"",
				IsExam:GoLangResponse.getIsExam(),
				TimeLimit:GoLangResponse.getTimeLimit(),
				CreatedAt:GoLangResponse.getCreatedAt(),
			}
		}
	}
	)
	return {
		Success:false,
		Message:"other error" ,
	}
	// return {
	// 	Success:true,
	// 	Message:"",
	// 	IsExam:true,
	// 	TimeLimit:"300",
	// 	CreatedAt:"2022-02-15 04:43:15 +0000 UTC",
	// }
}
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "commentoncode-v1" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('commentoncode-v1.sendComment', async() => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('sendComment from commentOnCode_v1!');
		const editor = vscode.window.activeTextEditor;
		// let cursorPosition = editor!.selection.start;
		//  var ter=process.env
		//  console.log(ter)
		// let wordRange = editor!.document.getWordRangeAtPosition(cursorPosition);
		let highlight = editor!.document.getText(editor!.selection);
		var firstLine = ( editor!.selection.start.line+1).toString()
		var firstChar = ( editor!.selection.start.character).toString()
		var lastLine =  (editor!.selection.end.line+1).toString()
		var lastChar =  (editor!.selection.end.character).toString()
		var thisFilename =editor!.document.fileName
	//	thisFilename=thisFilename.split('/').toString()
		var assignment = process.env.ASSIGNMENT_NAME!
		//console.log(thisFilename.toString())
		var topic ="Comment on Assignment "+ assignment+": in ".concat(
		thisFilename.toString(),": "
		+ firstLine+":"+firstChar+"-"+lastLine+":"+lastChar+'\n'+
		"Code: "+highlight)
		
		const userResponse = await vscode.window.showInputBox({
			placeHolder: 'Type your comment about the selected text...'
		});
		if ( userResponse !==undefined){
			vscode.window.showInformationMessage(userResponse)
			sendNotification(topic,userResponse!);
		}
	});

	context.subscriptions.push(disposable);


	var ContaienrTimeInfo = getContainerTime()
	if( ContaienrTimeInfo.Success){
		if (ContaienrTimeInfo.IsExam){
			var timeLimit =parseInt( ContaienrTimeInfo.TimeLimit)
			var timePassed= (Date.now()-Date.parse(ContaienrTimeInfo.CreatedAt))/(1000*60)
			// console.log(timeLimit,timePassed)
			var timeRemain=Math.ceil(timeLimit-timePassed)
			context.subscriptions.push(
				vscode.window.setStatusBarMessage(
					`Exam Time Remaining: ${timeRemain} minutes`
				)
			);
			var refreshId = setInterval(()=>{
				if (timeRemain>1){
					timeRemain=timeRemain-1
					context.subscriptions.push(
						vscode.window.setStatusBarMessage(
							`Exam Time Remaining: ${timeRemain} minutes`
						)
					);
				}else{
					context.subscriptions.push(
					vscode.window.setStatusBarMessage(
							`Exam Time is up`
						)
					);
					clearInterval(refreshId);
				}
			},1000*60)
		}
	}
}

// this method is called when your extension is deactivated
export function deactivate() {}
