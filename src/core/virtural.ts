import * as vscode from 'vscode';

export class GenScriptContentProvider implements vscode.TextDocumentContentProvider {
    // 用于缓存文档版本和内容
    private _onDidChange = new vscode.EventEmitter<vscode.Uri>();
    private documents = new Map<string, string>();

    // 注册内容提供程序
    activate(context: vscode.ExtensionContext) {
        context.subscriptions.push(
            vscode.workspace.registerTextDocumentContentProvider(
                'genui-script',
                this
            )
        );
    }

    // 当虚拟文档内容变化时触发
    get onDidChange(): vscode.Event<vscode.Uri> {
        return this._onDidChange.event;
    }

    // 更新脚本内容
    update(uri: vscode.Uri, script: string) {
        this.documents.set(uri.toString(), script);
        this._onDidChange.fire(uri);
    }

    // 核心：生成虚拟文档内容
    provideTextDocumentContent(uri: vscode.Uri): string {
        return this.documents.get(uri.toString()) || '';
    }
}



// export function mapDiagnostics(scriptUri: vscode.Uri, genUri: vscode.Uri, diagnostics: vscode.Diagnostic[]): vscode.Diagnostic[] {
//     const scriptDocument = vscode.workspace.textDocuments.find(doc => doc.uri.toString() === scriptUri.toString());
//     const genDocument = vscode.workspace.textDocuments.find(doc => doc.uri.toString() === genUri.toString());

//     if (!scriptDocument || !genDocument) {
//         return [];
//     }

//     const scriptText = scriptDocument.getText();
//     const scriptOffset = genDocument.getText().indexOf(scriptText);

//     return diagnostics.map(diagnostic => {
//         const start = genDocument.positionAt(scriptOffset + scriptDocument.offsetAt(diagnostic.range.start));
//         const end = genDocument.positionAt(scriptOffset + scriptDocument.offsetAt(diagnostic.range.end));
//         return new vscode.Diagnostic(
//             new vscode.Range(start, end),
//             diagnostic.message,
//             diagnostic.severity
//         );
//     });
// }
export function mapDiagnostics(rsUri: vscode.Uri, genUri: vscode.Uri, diagnostics: vscode.Diagnostic[]): vscode.Diagnostic[] {
    const rsDocument = vscode.workspace.textDocuments.find(doc => doc.uri.toString() === rsUri.toString());
    const genDocument = vscode.workspace.textDocuments.find(doc => doc.uri.toString() === genUri.toString());

    if (!rsDocument || !genDocument) {
        return [];
    }

    // 获取 .gen 文件中 <script> 标签的起始位置
    const genText = genDocument.getText();
    const scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
    const match = scriptRegex.exec(genText);
    if (!match) {
        return [];
    }

    const scriptStartOffset = match.index + match[0].indexOf(match[1]);
    const scriptStartPosition = genDocument.positionAt(scriptStartOffset);
    console.log(match, scriptStartOffset, scriptStartPosition);
    // 将诊断信息的位置映射到 .gen 文件
    return diagnostics.map(diagnostic => {
        const start = genDocument.positionAt(scriptStartOffset + rsDocument.offsetAt(diagnostic.range.start));
        const end = genDocument.positionAt(scriptStartOffset + rsDocument.offsetAt(diagnostic.range.end));
        return new vscode.Diagnostic(
            new vscode.Range(start, end),
            diagnostic.message,
            diagnostic.severity
        );
    });
}