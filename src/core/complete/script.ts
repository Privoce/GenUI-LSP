import {
  CancellationToken,
  CompletionContext,
  CompletionItem,
  CompletionItemKind,
  CompletionItemProvider,
  CompletionList,
  languages,
  Position,
  ProviderResult,
  TextDocument,
} from "vscode";

export class GenUICompletionProvider implements CompletionItemProvider {
  provideCompletionItems(
    document: TextDocument,
    position: Position,
    token: CancellationToken,
    context: CompletionContext
  ): ProviderResult<CompletionItem[] | CompletionList<CompletionItem>> {
    const line = document.lineAt(position).text;

    if (!is_in_sc_tag(document, position)) {
      return [];
    }

    // 特定的宏提示
    if (line.trim().startsWith("#")) {
      return [
        new CompletionItem("[prop]", CompletionItemKind.Snippet),
        new CompletionItem("[event]", CompletionItemKind.Snippet),
      ];
    } else {
      return [];
    }
  }
}

function is_in_sc_tag(document: TextDocument, position: Position): boolean {
  const text = document.getText();
  const offset = document.offsetAt(position);

  const sc_start = text.lastIndexOf("<script>", offset);
  const sc_end = text.lastIndexOf("</script>", offset);

  return sc_start !== -1 && (sc_end === -1 || sc_end > offset);
}

export function register_gen_complete_provider() {
  return languages.registerCompletionItemProvider(
    { scheme: "file", language: "gen" },
    new GenUICompletionProvider(),
    "#["
  );
}

