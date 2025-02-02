import { Prop, Event } from "./types";

const DOC = `
# \`checkbox\`

We recommend that you use \`checkbox\` in \`checkbox_group\`

> \`checkbox_group\` inherits from \`view\`

## Example

### Basic usage

If you want to indicate the selected state, use \`selected\` to specify

\`\`\`html
<checkbox_group>
  <checkbox text="'rap'"></checkbox>
  <checkbox text="'play basketball'" selected="true"></checkbox>
</checkbox_group>
\`\`\`

## Properties

### \`checkbox\` properties

| Name                          | Description                         | Type             |
| ----------------------------- | ----------------------------------- | ---------------- |
| \`theme\`                       | Theme                               | \`Themes\`         |
| \`color\`                       | Color                               | \`MakepadColor\`   |
| \`text_hover_color\`            | Text hover color                    | \`MakepadColor\`   |
| \`text_focus_color\`            | Text focus color                    | \`MakepadColor\`   |
| \`font_size\`                   | Font size                           | \`F64\`            |
| \`height_factor\`               | Height factor                       | \`F64\`            |
| \`wrap\`                        | Text wrapping method                | \`TextWrap\`       |
| \`font_family\`                 | Font family path                    | \`LiveDependency\` |
| \`text_visible\`                | Is the text visible                 | \`bool\`           |
| \`size\`                        | Size                                | \`F32\`            |
| \`checkbox_background_color\`   | Checkbox background color           | \`MakepadColor\`   |
| \`checkbox_background_visible\` | Is the checkbox background visible? | \`bool\`           |
| \`checkbox_hover_color\`        | Checkbox hover color                | \`MakepadColor\`   |
| \`checkbox_selected_color\`     | Checkbox selected color             | \`MakepadColor\`   |
| \`stroke_color\`                | Stroke color                        | \`MakepadColor\`   |
| \`stroke_hover_color\`          | Stroke hover color                  | \`MakepadColor\`   |
| \`stroke_selected_color\`       | Stroke selected color               | \`MakepadColor\`   |
| \`checkbox_border_color\`       | Checkbox border color               | \`MakepadColor\`   |
| \`checkbox_border_width\`       | Checkbox border width               | \`F32\`            |
| \`scale\`                       | Scale ratio                         | \`F32\`            |
| \`background_color\`            | Background color                    | \`MakepadColor\`   |
| \`hover_color\`                 | Hover color                         | \`MakepadColor\`   |
| \`focus_color\`                 | Focus color                         | \`MakepadColor\`   |
| \`shadow_color\`                | Shadow color                        | \`MakepadColor\`   |
| \`border_color\`                | Border color                        | \`MakepadColor\`   |
| \`background_visible\`          | Background visible or not           | \`bool\`           |
| \`border_width\`                | Border width                        | \`F32\`            |
| \`border_radius\`               | Border radius                       | \`F32\`            |
| \`spread_radius\`               | Spread radius                       | \`F32\`            |
| \`blur_radius\`                 | Blur radius                         | \`F32\`            |
| \`shadow_offset\`               | Shadow offset                       | \`Vec2\`           |
| \`cursor\`                      | Mouse cursor style                  | \`MouseCursor\`    |
| \`value\`                       | Value                               | \`String\`         |
| \`selected\`                    | Selected or not                     | \`bool\`           |
| \`text\`                        | Text content                        | \`String\`         |
| \`checkbox_type\`               | Checkbox type                       | \`GChooseType\`    |
| \`abs_pos\`                     | absolute position                   | \`DVec2\`          |
| \`margin\`                      | margin                              | \`Margin\`         |
| \`width\`                       | width                               | \`Size\`           |
| \`height\`                      | height                              | \`Size\`           |
| \`scroll\`                      | scroll offset                       | \`DVec2\`          |
| \`clip_x\`                      | clip X axis or not                  | \`bool\`           |
| \`clip_y\`                      | clip Y axis or not                  | \`bool\`           |
| \`padding\`                     | padding                             | \`Padding\`        |
| \`align\`                       | alignment                           | \`Align\`          |
| \`flow\`                        | flow mode                           | \`Flow\`           |
| \`spacing\`                     | spacing                             | \`F64\`            |
| \`visible\`                     | visible or not                      | \`bool\`           |
| \`animation_key\`               | animation key                       | \`bool\`           |
| \`grab_key_focus\`              | Capture keyboard focus              | \`bool\`           |
| \`event_key\`                   | event key                           | \`bool\`           |

## Event callback

### \`checkbox\` event callback

| Name        | Description       | Parameters              |
| ----------- | ----------------- | ----------------------- |
| \`clicked\`   | Click event       | \`GCheckboxClickedParam\` |
| \`hover_in\`  | Mouse hover event | \`GCheckboxHoverParam\`   |
| \`hover_out\` | Mouse out event   | \`GCheckboxHoverParam\`   |

`;

const DOC_GROUP = `
# \`checkbox_group\`

We recommend that you use \`checkbox\` in \`checkbox_group\`

## \`checkbox_group\` properties

| Name                 | Description                | Type           |
| -------------------- | -------------------------- | -------------- |
| \`theme\`              | Theme                      | \`Themes\`       |
| \`background_color\`   | Background color           | \`MakepadColor\` |
| \`hover_color\`        | Hover color                | \`MakepadColor\` |
| \`focus_color\`        | Focus color                | \`MakepadColor\` |
| \`border_color\`       | Border color               | \`MakepadColor\` |
| \`border_width\`       | Border width               | \`F32\`          |
| \`border_radius\`      | Border radius              | \`F32\`          |
| \`visible\`            | Visible or not             | \`bool\`         |
| \`background_visible\` | Background visible or not  | \`bool\`         |
| \`shadow_color\`       | Shadow color               | \`MakepadColor\` |
| \`spread_radius\`      | Shadow spread radius       | \`F32\`          |
| \`blur_radius\`        | Shadow blur radius         | \`F32\`          |
| \`shadow_offset\`      | Shadow offset              | \`Vec2\`         |
| \`cursor\`             | Mouse pointer style        | \`MouseCursor\`  |
| \`animation_key\`      | Animation key              | \`bool\`         |
| \`grab_key_focus\`     | Capture keyboard focus     | \`bool\`         |
| \`block_signal_event\` | Block signal event         | \`bool\`         |
| \`abs_pos\`            | Absolute position          | \`DVec2\`        |
| \`margin\`             | Margin                     | \`Margin\`       |
| \`width\`              | Width                      | \`Size\`         |
| \`height\`             | Height                     | \`Size\`         |
| \`scroll\`             | Scroll offset              | \`DVec2\`        |
| \`clip_x\`             | Clip X axis or not         | \`bool\`         |
| \`clip_y\`             | Clip Y axis or not         | \`bool\`         |
| \`padding\`            | Padding                    | \`Padding\`      |
| \`align\`              | Alignment                  | \`Align\`        |
| \`flow\`               | Flow                       | \`Flow\`         |
| \`spacing\`            | Spacing                    | \`F64\`          |
| \`event_order\`        | Event order                | \`EventOrder\`   |
| \`dpi_factor\`         | DPI scaling factor         | \`F64\`          |
| \`optimize\`           | View optimization options  | \`ViewOptimize\` |
| \`capture_overload\`   | Capture overload           | \`bool\`         |
| \`event_key\`          | Event key                  | \`bool\`         |
| \`block_child_events\` | Block child event delivery | \`bool\`         |

## \`checkbox_group\` event callback

| Name      | Description        | Parameters                 |
| --------- | ------------------ | -------------------------- |
| \`changed\` | State change event | \`GCheckboxGroupEventParam\` |
`;

export const CHECKBOX = "checkbox";
export const CHECKBOX_GROUP = "checkbox_group";
export const MAP_ITEM_CHECKBOX: [string, string] = [CHECKBOX, DOC];
export const MAP_ITEM_CHECKBOX_GROUP: [string, string] = [CHECKBOX, DOC_GROUP];

export const CHECKBOX_PROPS: Prop[] = [
  { name: "theme", type: "Themes", description: "Theme" },
  { name: "color", type: "MakepadColor", description: "Color" },
  {
    name: "text_hover_color",
    type: "MakepadColor",
    description: "Text hover color",
  },
  {
    name: "text_focus_color",
    type: "MakepadColor",
    description: "Text focus color",
  },
  { name: "font_size", type: "F64", description: "Font size" },
  { name: "height_factor", type: "F64", description: "Height factor" },
  { name: "wrap", type: "TextWrap", description: "Text wrapping method" },
  {
    name: "font_family",
    type: "LiveDependency",
    description: "Font family path",
  },
  { name: "text_visible", type: "bool", description: "Is the text visible" },
  { name: "size", type: "F32", description: "Size" },
  {
    name: "checkbox_background_color",
    type: "MakepadColor",
    description: "Checkbox background color",
  },
  {
    name: "checkbox_background_visible",
    type: "bool",
    description: "Is the checkbox background visible?",
  },
  {
    name: "checkbox_hover_color",
    type: "MakepadColor",
    description: "Checkbox hover color",
  },
  {
    name: "checkbox_selected_color",
    type: "MakepadColor",
    description: "Checkbox selected color",
  },
  { name: "stroke_color", type: "MakepadColor", description: "Stroke color" },
  {
    name: "stroke_hover_color",
    type: "MakepadColor",
    description: "Stroke hover color",
  },
  {
    name: "stroke_selected_color",
    type: "MakepadColor",
    description: "Stroke selected color",
  },
  {
    name: "checkbox_border_color",
    type: "MakepadColor",
    description: "Checkbox border color",
  },
  {
    name: "checkbox_border_width",
    type: "F32",
    description: "Checkbox border width",
  },
  { name: "scale", type: "F32", description: "Scale ratio" },
  {
    name: "background_color",
    type: "MakepadColor",
    description: "Background color",
  },
  { name: "hover_color", type: "MakepadColor", description: "Hover color" },
  { name: "focus_color", type: "MakepadColor", description: "Focus color" },
  { name: "shadow_color", type: "MakepadColor", description: "Shadow color" },
  { name: "border_color", type: "MakepadColor", description: "Border color" },
  {
    name: "background_visible",
    type: "bool",
    description: "Background visible or not",
  },
  { name: "border_width", type: "F32", description: "Border width" },
  { name: "border_radius", type: "F32", description: "Border radius" },
  { name: "spread_radius", type: "F32", description: "Spread radius" },
  { name: "blur_radius", type: "F32", description: "Blur radius" },
  { name: "shadow_offset", type: "Vec2", description: "Shadow offset" },
  { name: "cursor", type: "MouseCursor", description: "Mouse cursor style" },
  { name: "value", type: "String", description: "Value" },
  { name: "selected", type: "bool", description: "Selected or not" },
  { name: "text", type: "String", description: "Text content" },
  { name: "checkbox_type", type: "GChooseType", description: "Checkbox type" },
  { name: "abs_pos", type: "DVec2", description: "absolute position" },
  { name: "margin", type: "Margin", description: "margin" },
  { name: "width", type: "Size", description: "width" },
  { name: "height", type: "Size", description: "height" },
  { name: "scroll", type: "DVec2", description: "scroll offset" },
  { name: "clip_x", type: "bool", description: "clip X axis or not" },
  { name: "clip_y", type: "bool", description: "clip Y axis or not" },
  { name: "padding", type: "Padding", description: "padding" },
  { name: "align", type: "Align", description: "alignment" },
  { name: "flow", type: "Flow", description: "flow mode" },
  { name: "spacing", type: "F64", description: "spacing" },
  { name: "visible", type: "bool", description: "visible or not" },
  { name: "animation_key", type: "bool", description: "animation key" },
  {
    name: "grab_key_focus",
    type: "bool",
    description: "Capture keyboard focus",
  },
  { name: "event_key", type: "bool", description: "event key" },
];
export const CHECKBOX_GROUP_PROPS: Prop[] = [
  {
    name: "theme",
    type: "Themes",
    description: "Theme",
  },
  {
    name: "background_color",
    type: "MakepadColor",
    description: "Background color",
  },
  {
    name: "hover_color",
    type: "MakepadColor",
    description: "Hover color",
  },
  {
    name: "focus_color",
    type: "MakepadColor",
    description: "Focus color",
  },
  {
    name: "border_color",
    type: "MakepadColor",
    description: "Border color",
  },
  {
    name: "border_width",
    type: "F32",
    description: "Border width",
  },
  {
    name: "border_radius",
    type: "F32",
    description: "Border radius",
  },
  {
    name: "visible",
    type: "bool",
    description: "Visible or not",
  },
  {
    name: "background_visible",
    type: "bool",
    description: "Background visible or not",
  },
  {
    name: "shadow_color",
    type: "MakepadColor",
    description: "Shadow color",
  },
  {
    name: "spread_radius",
    type: "F32",
    description: "Shadow spread radius",
  },
  {
    name: "blur_radius",
    type: "F32",
    description: "Shadow blur radius",
  },
  {
    name: "shadow_offset",
    type: "Vec2",
    description: "Shadow offset",
  },
  {
    name: "cursor",
    type: "MouseCursor",
    description: "Mouse pointer style",
  },
  {
    name: "animation_key",
    type: "bool",
    description: "Animation key",
  },
  {
    name: "grab_key_focus",
    type: "bool",
    description: "Capture keyboard focus",
  },
  {
    name: "block_signal_event",
    type: "bool",
    description: "Block signal event",
  },
  {
    name: "abs_pos",
    type: "DVec2",
    description: "Absolute position",
  },
  {
    name: "margin",
    type: "Margin",
    description: "Margin",
  },
  {
    name: "width",
    type: "Size",
    description: "Width",
  },
  {
    name: "height",
    type: "Size",
    description: "Height",
  },
  {
    name: "scroll",
    type: "DVec2",
    description: "Scroll offset",
  },
  {
    name: "clip_x",
    type: "bool",
    description: "Clip X axis or not",
  },
  {
    name: "clip_y",
    type: "bool",
    description: "Clip Y axis or not",
  },
  {
    name: "padding",
    type: "Padding",
    description: "Padding",
  },
  {
    name: "align",
    type: "Align",
    description: "Alignment",
  },
  {
    name: "flow",
    type: "Flow",
    description: "Flow",
  },
  {
    name: "spacing",
    type: "F64",
    description: "Spacing",
  },
  {
    name: "event_order",
    type: "EventOrder",
    description: "Event order",
  },
  {
    name: "dpi_factor",
    type: "F64",
    description: "DPI scaling factor",
  },
  {
    name: "optimize",
    type: "ViewOptimize",
    description: "View optimization options",
  },
  {
    name: "capture_overload",
    type: "bool",
    description: "Capture overload",
  },
  {
    name: "event_key",
    type: "bool",
    description: "Event key",
  },
  {
    name: "block_child_events",
    type: "bool",
    description: "Block child event delivery",
  },
];
export const CHECKBOX_EVENTS: Event[] = [
  {
    name: "clicked",
    params: "GCheckboxClickedParam",
    description: "Click event",
  },
  {
    name: "hover_in",
    params: "GCheckboxHoverParam",
    description: "Mouse hover event",
  },
  {
    name: "hover_out",
    params: "GCheckboxHoverParam",
    description: "Mouse out event",
  },
];
export const CHECKBOX_GROUP_EVENTS: Event[] = [
  {
    name: "changed",
    params: "GCheckboxGroupEventParam",
    description: "State change event",
  },
];
