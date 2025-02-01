import { MAP_ITEM_VIEW, VIEW } from "./view";
import {
  TEMPLATE,
  SCRIPT,
  STYLE,
  MAP_ITEM_SCRIPT,
  MAP_ITEM_STYLE,
  MAP_ITEM_TEMPLATE,
} from "./holder";
import { COMPONENT, MAP_ITEM_COMPONENT } from "./component";
import { BUTTON, MAP_ITEM_BUTTON } from "./button";
import {
  CHECKBOX,
  CHECKBOX_GROUP,
  MAP_ITEM_CHECKBOX,
  MAP_ITEM_CHECKBOX_GROUP,
} from "./checkbox";
import { DIVIDER, MAP_ITEM_DIVIDER } from "./divider";
import { MAP_ITEM_SVG, SVG } from "./svg";
import {
  MAP_ITEM_RADIO,
  MAP_ITEM_RADIO_GROUP,
  RADIO,
  RADIO_GROUP,
} from "./radio";
import { INPUT, MAP_ITEM_INPUT } from "./input";
import { LABEL, MAP_ITEM_LABEL } from "./label";
import { MAP_ITEM_SCROLLBARS, SCROLLBARS } from "./scrollbars";
import { LINK, MAP_ITEM_LINK } from "./link";
import { MAP_ITEM_IMAGE } from "./image";

export const COMPONENTS = [
  TEMPLATE,
  SCRIPT,
  STYLE,
  COMPONENT,
  VIEW,
  BUTTON,
  CHECKBOX,
  DIVIDER,
  SVG,
  CHECKBOX_GROUP,
  RADIO_GROUP,
  RADIO,
  INPUT,
  LABEL,
  SCROLLBARS,
  LINK,
];

export const COMPONENTS_DOC_MAP = new Map<string, string>([
  MAP_ITEM_TEMPLATE,
  MAP_ITEM_SCRIPT,
  MAP_ITEM_STYLE,
  MAP_ITEM_VIEW,
  MAP_ITEM_COMPONENT,
  MAP_ITEM_BUTTON,
  MAP_ITEM_CHECKBOX,
  MAP_ITEM_DIVIDER,
  MAP_ITEM_CHECKBOX_GROUP,
  MAP_ITEM_IMAGE,
  MAP_ITEM_INPUT,
  MAP_ITEM_LABEL,
  MAP_ITEM_SVG,
  MAP_ITEM_LINK,
  MAP_ITEM_RADIO,
  MAP_ITEM_RADIO_GROUP,
  MAP_ITEM_SCROLLBARS,
]);
