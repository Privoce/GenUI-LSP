import * as vscode from "vscode";
import { do_hover_provide } from "./core";
import {
  register_complete_providers,
  do_completion_provide,
} from "./core/complete";

export function activate(context: vscode.ExtensionContext) {
  const complete_providers = register_complete_providers();

  const hover_provider = vscode.languages.registerHoverProvider("gen", {
    provideHover(document, position, token) {
      return do_hover_provide(document, position);
    },
  });

  context.subscriptions.splice(0, 0, ...complete_providers);
  context.subscriptions.push(hover_provider);
}

export function deactivate() {}
