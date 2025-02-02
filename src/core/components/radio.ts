import { Prop, Event } from "./types";

const DOC = `
# \`radio\`

We recommend that you put \`radio\` in \`radio_group\` for use

> \`radio_group\` inherits from \`view\`

## Example

### Basic usage

You may have found that \`radio_group\` has \`selected\` but \`checkbox_group\` does not. This is a point that needs extra attention at present. We will unify the final style in the next version

> [!WARNING]
>
> It is unwise to set \`selected\` in \`radio\`, so the final compilation may not pass when you use the \`radio_group\` package
>
> Especially if you set multiple \`radios\` to \`selected="true"\` at the same time

\`\`\`html
<radio_group selected="1">
  <radio text="'male'"></radio>
  <radio text="'female'"></radio>
</radio_group>
\`\`\`

## Properties

### \`radio\` properties

| Name                       | Description                             | Type             |
| -------------------------- | --------------------------------------- | ---------------- |
| \`theme\`                    | Theme                                   | \`Themes\`         |
| \`color\`                    | Color                                   | \`MakepadColor\`   |
| \`text_hover_color\`         | Text hover color                        | \`MakepadColor\`   |
| \`text_focus_color\`         | Text focus color                        | \`MakepadColor\`   |
| \`font_size\`                | Font size                               | \`F64\`            |
| \`height_factor\`            | Height factor                           | \`F64\`            |
| \`wrap\`                     | Text wrapping method                    | \`TextWrap\`       |
| \`font_family\`              | Font family path                        | \`LiveDependency\` |
| \`text_visible\`             | Is the text visible                     | \`bool\`           |
| \`size\`                     | Size                                    | \`F32\`            |
| \`radio_background_color\`   | Radio button background color           | \`MakepadColor\`   |
| \`radio_background_visible\` | Is the radio button background visible? | \`bool\`           |
| \`radio_hover_color\`        | Radio button hover color                | \`MakepadColor\`   |
| \`radio_selected_color\`     | Radio button selected color             | \`MakepadColor\`   |
| \`stroke_color\`             | Stroke color                            | \`MakepadColor\`   |
| \`stroke_hover_color\`       | Stroke hover color                      | \`MakepadColor\`   |
| \`stroke_selected_color\`    | Stroke selected color                   | \`MakepadColor\`   |
| \`radio_border_color\`       | Radio button border color               | \`MakepadColor\`   |
| \`radio_border_width\`       | Radio button border width               | \`F32\`            |
| \`scale\`                    | Scale ratio                             | \`F32\`            |
| \`background_color\`         | Background color                        | \`MakepadColor\`   |
| \`hover_color\`              | Hover color                             | \`MakepadColor\`   |
| \`focus_color\`              | Focus color                             | \`MakepadColor\`   |
| \`shadow_color\`             | Shadow color                            | \`MakepadColor\`   |
| \`border_color\`             | Border color                            | \`MakepadColor\`   |
| \`background_visible\`       | Is the background visible?              | \`bool\`           |
| \`border_width\`             | Border width                            | \`F32\`            |
| \`border_radius\`            | Border radius                           | \`F32\`            |
| \`spread_radius\`            | Spread radius                           | \`F32\`            |
| \`blur_radius\`              | Blur radius                             | \`F32\`            |
| \`shadow_offset\`            | Shadow offset                           | \`Vec2\`           |
| \`cursor\`                   | Mouse cursor style                      | \`MouseCursor\`    |
| \`value\`                    | Value                                   | \`String\`         |
| \`selected\`                 | Is it selected?                         | \`bool\`           |
| \`text\`                     | Text content                            | \`String\`         |
| \`radio_type\`               | Radio button type                       | \`GChooseType\`    |
| \`abs_pos\`                  | Absolute position                       | \`DVec2\`          |
| \`margin\`                   | Margin                                  | \`Margin\`         |
| \`width\`                    | Width                                   | \`Size\`           |
| \`height\`                   | Height                                  | \`Size\`           |
| \`scroll\`                   | Scroll offset                           | \`DVec2\`          |
| \`clip_x\`                   | Clip X axis                             | \`bool\`           |
| \`clip_y\`                   | Clip Y axis                             | \`bool\`           |
| \`padding\`                  | Padding                                 | \`Padding\`        |
| \`align\`                    | Alignment                               | \`Align\`          |
| \`flow\`                     | Flow mode                               | \`Flow\`           |
| \`spacing\`                  | Spacing                                 | \`F64\`            |
| \`visible\`                  | Visible                                 | \`bool\`           |
| \`animation_key\`            | Animation key                           | \`bool\`           |
| \`grab_key_focus\`           | Capture keyboard focus                  | \`bool\`           |
| \`event_key\`                | Event key                               | \`bool\`           |

### \`radio\` event callbacks

| Name        | Description       | Parameters           |
| ----------- | ----------------- | -------------------- |
| \`clicked\`   | Click event       | \`GRadioClickedParam\` |
| \`hover_in\`  | Mouse hover event | \`GRadioHoverParam\`   |
| \`hover_out\` | Mouse out event   | \`GRadioHoverParam\`   |
`;

const DOC_GROUP = `
# \`radio_group\`

We recommend that you put \`radio\` in \`radio_group\` for use

> \`radio_group\` inherits from \`view\`

## \`radio_group\` properties

| Name                 | Description                    | Type           |
| -------------------- | ------------------------------ | -------------- |
| \`selected\`           | Which radio button is selected | \`I32\`          |
| \`theme\`              | Theme                          | \`Themes\`       |
| \`background_color\`   | Background color               | \`MakepadColor\` |
| \`hover_color\`        | Hover color                    | \`MakepadColor\` |
| \`focus_color\`        | Focus color                    | \`MakepadColor\` |
| \`border_color\`       | Border color                   | \`MakepadColor\` |
| \`border_width\`       | Border width                   | \`F32\`          |
| \`border_radius\`      | Border radius                  | \`F32\`          |
| \`visible\`            | Is it visible                  | \`bool\`         |
| \`background_visible\` | Is the background visible      | \`bool\`         |
| \`shadow_color\`       | Shadow color                   | \`MakepadColor\` |
| \`spread_radius\`      | Shadow diffusion radius        | \`F32\`          |
| \`blur_radius\`        | Shadow blur radius             | \`F32\`          |
| \`shadow_offset\`      | Shadow offset                  | \`Vec2\`         |
| \`cursor\`             | Mouse pointer style            | \`MouseCursor\`  |
| \`animation_key\`      | Animation key                  | \`bool\`         |
| \`grab_key_focus\`     | Capture keyboard focus         | \`bool\`         |
| \`block_signal_event\` | Block signal event             | \`bool\`         |
| \`abs_pos\`            | Absolute position              | \`DVec2\`        |
| \`margin\`             | Margin                         | \`Margin\`       |
| \`width\`              | Width                          | \`Size\`         |
| \`height\`             | Height                         | \`Size\`         |
| \`scroll\`             | Scroll offset                  | \`DVec2\`        |
| \`clip_x\`             | Whether to clip the X axis     | \`bool\`         |
| \`clip_y\`             | Whether to clip the Y axis     | \`bool\`         |
| \`padding\`            | Padding                        | \`Padding\`      |
| \`align\`              | Alignment                      | \`Align\`        |
| \`flow\`               | Flow mode                      | \`Flow\`         |
| \`spacing\`            | Spacing                        | \`F64\`          |
| \`event_order\`        | Event order                    | \`EventOrder\`   |
| \`dpi_factor\`         | DPI scaling factor             | \`F64\`          |
| \`optimize\`           | View optimization options      | \`ViewOptimize\` |
| \`capture_overload\`   | Capture overload               | \`bool\`         |
| \`event_key\`          | Event key                      | \`bool\`         |
| \`block_child_events\` | Block child event delivery     | \`bool\`         |

## \`radio_group\` event callbacks

| Name      | Description        | Parameters              |
| --------- | ------------------ | ----------------------- |
| \`changed\` | State change event | \`GRadioGroupEventParam\` |
`;

export const RADIO = "radio";
export const RADIO_GROUP = "radio_group";
export const MAP_ITEM_RADIO: [string, string] = [RADIO, DOC];
export const MAP_ITEM_RADIO_GROUP: [string, string] = [RADIO_GROUP, DOC_GROUP];
export const RADIO_PROPS: Prop[] = [
  {
    name: "theme",
    type: "Themes",
    description: "Theme",
  },
  {
    name: "color",
    type: "MakepadColor",
    description: "Color",
  },
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
  {
    name: "font_size",
    type: "F64",
    description: "Font size",
  },
  {
    name: "height_factor",
    type: "F64",
    description: "Height factor",
  },
  {
    name: "wrap",
    type: "TextWrap",
    description: "Text wrapping method",
  },
  {
    name: "font_family",
    type: "LiveDependency",
    description: "Font family path",
  },
  {
    name: "text_visible",
    type: "bool",
    description: "Is the text visible",
  },
  {
    name: "size",
    type: "F32",
    description: "Size",
  },
  {
    name: "radio_background_color",
    type: "MakepadColor",
    description: "Radio button background color",
  },
  {
    name: "radio_background_visible",
    type: "bool",
    description: "Is the radio button background visible?",
  },
  {
    name: "radio_hover_color",
    type: "MakepadColor",
    description: "Radio button hover color",
  },
  {
    name: "radio_selected_color",
    type: "MakepadColor",
    description: "Radio button selected color",
  },
  {
    name: "stroke_color",
    type: "MakepadColor",
    description: "Stroke color",
  },
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
    name: "radio_border_color",
    type: "MakepadColor",
    description: "Radio button border color",
  },
  {
    name: "radio_border_width",
    type: "F32",
    description: "Radio button border width",
  },
  {
    name: "scale",
    type: "F32",
    description: "Scale ratio",
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
    name: "shadow_color",
    type: "MakepadColor",
    description: "Shadow color",
  },
  {
    name: "border_color",
    type: "MakepadColor",
    description: "Border color",
  },
  {
    name: "background_visible",
    type: "bool",
    description: "Is the background visible?",
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
    name: "spread_radius",
    type: "F32",
    description: "Spread radius",
  },
  {
    name: "blur_radius",
    type: "F32",
    description: "Blur radius",
  },
  {
    name: "shadow_offset",
    type: "Vec2",
    description: "Shadow offset",
  },
  {
    name: "cursor",
    type: "MouseCursor",
    description: "Mouse cursor style",
  },
  {
    name: "value",
    type: "String",
    description: "Value",
  },
  {
    name: "selected",
    type: "bool",
    description: "Is it selected?",
  },
  {
    name: "text",
    type: "String",
    description: "Text content",
  },
  {
    name: "radio_type",
    type: "GChooseType",
    description: "Radio button type",
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
    description: "Clip X axis",
  },
  {
    name: "clip_y",
    type: "bool",
    description: "Clip Y axis",
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
    description: "Flow mode",
  },
  {
    name: "spacing",
    type: "F64",
    description: "Spacing",
  },
  {
    name: "visible",
    type: "bool",
    description: "Visible",
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
    name: "event_key",
    type: "bool",
    description: "Event key",
  },
];

export const RADIO_GROUP_PROPS: Prop[] = [
  {
    name: "selected",
    type: "I32",
    description: "Which radio button is selected",
  },
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
    description: "Is it visible",
  },
  {
    name: "background_visible",
    type: "bool",
    description: "Is the background visible",
  },
  {
    name: "shadow_color",
    type: "MakepadColor",
    description: "Shadow color",
  },
  {
    name: "spread_radius",
    type: "F32",
    description: "Shadow diffusion radius",
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
    description: "Whether to clip the X axis",
  },
  {
    name: "clip_y",
    type: "bool",
    description: "Whether to clip the Y axis",
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
    description: "Flow mode",
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

export const RADIO_EVENTS: Event[] = [
  {
    name: "clicked",
    params: "GRadioClickedParam",
    description: "Click event",
  },
  {
    name: "hover_in",
    params: "GRadioHoverParam",
    description: "Mouse hover event",
  },
  {
    name: "hover_out",
    params: "GRadioHoverParam",
    description: "Mouse out event",
  },
];
export const RADIO_GROUP_EVENTS: Event[] = [
  {
    name: "changed",
    params: "GRadioGroupEventParam",
    description: "State change event",
  },
];
