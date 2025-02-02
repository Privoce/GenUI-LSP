import { MAP_ITEM_VIEW, VIEW, VIEW_PROPS } from "./view";
import {
  TEMPLATE,
  SCRIPT,
  STYLE,
  MAP_ITEM_SCRIPT,
  MAP_ITEM_STYLE,
  MAP_ITEM_TEMPLATE,
} from "./holder";
import { COMPONENT, MAP_ITEM_COMPONENT } from "./component";
import { BUTTON, BUTTON_PROPS, MAP_ITEM_BUTTON, BUTTON_EVENTS } from "./button";
import {
  CHECKBOX,
  CHECKBOX_EVENTS,
  CHECKBOX_GROUP,
  CHECKBOX_GROUP_EVENTS,
  CHECKBOX_GROUP_PROPS,
  CHECKBOX_PROPS,
  MAP_ITEM_CHECKBOX,
  MAP_ITEM_CHECKBOX_GROUP,
} from "./checkbox";
import { DIVIDER, DIVIDER_PROPS, MAP_ITEM_DIVIDER } from "./divider";
import { MAP_ITEM_SVG, SVG, SVG_EVENTS, SVG_PROPS } from "./svg";
import {
  MAP_ITEM_RADIO,
  MAP_ITEM_RADIO_GROUP,
  RADIO,
  RADIO_EVENTS,
  RADIO_GROUP,
  RADIO_GROUP_EVENTS,
  RADIO_GROUP_PROPS,
  RADIO_PROPS,
} from "./radio";
import { INPUT, INPUT_EVENTS, INPUT_PROPS, MAP_ITEM_INPUT } from "./input";
import { LABEL, LABEL_EVENTS, LABEL_PROPS, MAP_ITEM_LABEL } from "./label";
import {
  MAP_ITEM_SCROLLBARS,
  SCROLLBARS,
  SCROLLBARS_PROPS,
} from "./scrollbars";
import { LINK, LINK_EVENTS, LINK_PROPS, MAP_ITEM_LINK } from "./link";
import { IMAGE, IMAGE_EVENTS, IMAGE_PROPS, MAP_ITEM_IMAGE } from "./image";
import { Prop, Event } from "./types";

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

export const COMPONENTS_PROPS = new Map<string, Prop[]>([
  [BUTTON, BUTTON_PROPS],
  [VIEW, VIEW_PROPS],
  [SVG, SVG_PROPS],
  [SCROLLBARS, SCROLLBARS_PROPS],
  [RADIO, RADIO_PROPS],
  [RADIO_GROUP, RADIO_GROUP_PROPS],
  [LABEL, LABEL_PROPS],
  [LINK, LINK_PROPS],
  [INPUT, INPUT_PROPS],
  [IMAGE, IMAGE_PROPS],
  [DIVIDER, DIVIDER_PROPS],
  [CHECKBOX, CHECKBOX_PROPS],
  [CHECKBOX_GROUP, CHECKBOX_GROUP_PROPS],
]);

export const COMPONENTS_EVENTS = new Map<string, Event[]>([
  [BUTTON, BUTTON_EVENTS],
  [SVG, SVG_EVENTS],
  [RADIO, RADIO_EVENTS],
  [RADIO_GROUP, RADIO_GROUP_EVENTS],
  [LABEL, LABEL_EVENTS],
  [LINK, LINK_EVENTS],
  [IMAGE, IMAGE_EVENTS],
  [INPUT, INPUT_EVENTS],
  [CHECKBOX, CHECKBOX_EVENTS],
  [CHECKBOX_GROUP, CHECKBOX_GROUP_EVENTS],
]);
