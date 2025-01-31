import { Hover, Position, TextDocument } from "vscode";
import { COMPONENTS_DOC_MAP } from "./components";

export function do_hover_provide(document: TextDocument, position: Position) {
  const range = document.getWordRangeAtPosition(position);
  const word = document.getText(range);
  let msg = COMPONENTS_DOC_MAP.get(word);
  return msg ? new Hover(msg) : undefined;
}
