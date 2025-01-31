import { MAP_ITEM_VIEW, VIEW } from "./view";
import {
  TEMPLATE,
  SCRIPT,
  STYLE,
  MAP_ITEM_SCRIPT,
  MAP_ITEM_STYLE,
  MAP_ITEM_TEMPLATE,
} from "./holder";

export const COMPONENTS = [TEMPLATE, SCRIPT, STYLE, VIEW];

export const COMPONENTS_DOC_MAP = new Map<string, string>([
  MAP_ITEM_TEMPLATE,
  MAP_ITEM_SCRIPT,
  MAP_ITEM_STYLE,
  MAP_ITEM_VIEW,
]);
