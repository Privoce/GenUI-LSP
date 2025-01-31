import { Hover, Position, TextDocument } from "vscode";
import { DOC_COMPONENT, DOC_LABEL } from "./document";

export function do_hover_provide(document: TextDocument, position: Position) {
  const range = document.getWordRangeAtPosition(position);
  const word = document.getText(range);

  let msg = HOVER_MAP.get(word);
  return msg ? new Hover(msg) : undefined;
}

const HOVER_MAP = new Map<string, string>([
  ["component", DOC_COMPONENT],
  ["view", DOC_LABEL],
  ["label", "`<label>`"],
  ["button", "`<button>`"],
  ["input", "`<input>`"],
  ["checkbox", "`<checkbox>`"],
  ["id", "GenUI Attribute (string)"],
  ["text", "GenUI Attribute (string)"],
  ["height", "GenUI Attribute (number)"],
  [":width", "GenUI Attribute (binding)"],
  ["@clicked", "GenUI Attribute (event)"],
]);
