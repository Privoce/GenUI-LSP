import * as vscode from "vscode";
import {do_hover_provide} from "./core"

export function activate(context: vscode.ExtensionContext) {
    const provider = vscode.languages.registerCompletionItemProvider(
        "gen",
        {
            provideCompletionItems(document, position, token, context) {
                const completionItems: vscode.CompletionItem[] = [];

                // 预定义的 GenUI 组件
                const components = [
                    "component",
                    "view",
                    "label",
                    "button",
                    "input",
                    "checkbox"
                ];

                // 预定义的 GenUI 组件属性
                const attributes = [
                    { name: "id", type: "string" },
                    { name: "text", type: "string" },
                    { name: "height", type: "number" },
                    { name: ":width", type: "binding" },
                    { name: "@clicked", type: "event" }
                ];

                // 组件补全
                components.forEach((comp) => {
                    const item = new vscode.CompletionItem(
                        comp,
                        vscode.CompletionItemKind.Class
                    );
                    item.detail = `GenUI Component: <${comp}>`;
                    completionItems.push(item);
                });

                // 属性补全
                attributes.forEach((attr) => {
                    const item = new vscode.CompletionItem(
                        attr.name,
                        vscode.CompletionItemKind.Property
                    );
                    item.detail = `GenUI Attribute (${attr.type})`;
                    completionItems.push(item);
                });

                return completionItems;
            },
        },
        "<" // 触发补全的字符，输入 `<` 时会自动补全组件
    );

    const provider2 = vscode.languages.registerHoverProvider("gen", {
        provideHover(document, position, token) {
            return do_hover_provide(document, position);
        },
    });

    context.subscriptions.push(provider);
    context.subscriptions.push(provider2);
}

export function deactivate() {}
