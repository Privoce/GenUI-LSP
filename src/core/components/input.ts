import { Prop, Event } from "./types";

const DOC = `
# \`input\`

Input characters through the mouse or keyboard

> [!NOTE]
>
> Currently, the input box has relatively limited capabilities. We plan to launch more or more powerful input boxes in the next version

## Examples

### Basic usage

\`\`\`html
<input
    text="'Hello'"
    height="36.0"
    width="200.0">
</input>
\`\`\`

## Properties

| Name                   | Description           | Type             |
| ---------------------- | --------------------- | ---------------- |
| \`theme\`                | Theme                 | \`Themes\`         |
| \`shadow_color\`         | Shadow color          | \`MakepadColor\`   |
| \`spread_radius\`        | Spread radius         | \`F32\`            |
| \`blur_radius\`          | Blur radius           | \`F32\`            |
| \`shadow_offset\`        | Shadow offset         | \`Vec2\`           |
| \`placeholder_color\`    | Placeholder color     | \`MakepadColor\`   |
| \`color\`                | Color                 | \`MakepadColor\`   |
| \`cursor_color\`         | Cursor color          | \`MakepadColor\`   |
| \`select_color\`         | Selection color       | \`MakepadColor\`   |
| \`background_color\`     | Background color      | \`MakepadColor\`   |
| \`background_visible\`   | Background visible    | \`bool\`           |
| \`visible\`              | Visible               | \`bool\`           |
| \`hover_color\`          | Hover color           | \`MakepadColor\`   |
| \`text_hover_color\`     | Text hover color      | \`MakepadColor\`   |
| \`text_focus_color\`     | Text focus color      | \`MakepadColor\`   |
| \`cursor_hover_color\`   | Cursor hover color    | \`MakepadColor\`   |
| \`cursor_focus_color\`   | Cursor focus color    | \`MakepadColor\`   |
| \`select_hover_color\`   | Selection hover color | \`MakepadColor\`   |
| \`select_focus_color\`   | Selection focus color | \`MakepadColor\`   |
| \`focus_color\`          | Focus color           | \`MakepadColor\`   |
| \`border_color\`         | Border color          | \`MakepadColor\`   |
| \`border_width\`         | Border width          | \`F32\`            |
| \`border_radius\`        | Border radius         | \`F32\`            |
| \`font_size\`            | Font size             | \`F64\`            |
| \`height_factor\`        | Height factor         | \`F64\`            |
| \`wrap\`                 | Text wrapping method  | \`TextWrap\`       |
| \`font_family\`          | Font family path      | \`LiveDependency\` |
| \`cursor_border_radius\` | Cursor corner radius  | \`F64\`            |
| \`abs_pos\`              | Absolute position     | \`DVec2\`          |
| \`margin\`               | Margin                | \`Margin\`         |
| \`width\`                | Width                 | \`Size\`           |
| \`height\`               | Height                | \`Size\`           |
| \`scroll\`               | Scroll offset         | \`DVec2\`          |
| \`clip_x\`               | Clip X axis or not    | \`bool\`           |
| \`clip_y\`               | Clip Y axis or not    | \`bool\`           |
| \`padding\`              | Padding               | \`Padding\`        |
| \`align\`                | Alignment             | \`Align\`          |
| \`flow\`                 | Flow mode             | \`Flow\`           |
| \`spacing\`              | Spacing               | \`F64\`            |
| \`cursor_width\`         | Cursor width          | \`F64\`            |
| \`read_only\`            | Read-only             | \`bool\`           |
| \`numeric_only\`         | Numeric input only    | \`bool\`           |
| \`placeholder\`          | Placeholder           | \`String\`         |
| \`text\`                 | Text content          | \`String\`         |
| \`event_key\`            | Event key             | \`bool\`           |

## Event callback

| Name                | Description               | Parameters           |
| ------------------- | ------------------------- | -------------------- |
| \`changed\`           | Input value change event  | \`GInputChangedParam\` |
| \`keydown_unhandled\` | Unhandled key press event | \`KeyEvent\`           |
| \`escaped\`           | Esc key press event       | \`_\`                  |
| \`key_focus\`         | Get keyboard focus event  | \`_\`                  |
| \`key_focus_lost\`    | Lose keyboard focus event | \`_\`                  |
`;

export const INPUT = "input";
export const MAP_ITEM_INPUT: [string, string] = [INPUT, DOC];
export const INPUT_PROPS: Prop[] = [
  {
    name: "theme",
    type: "Themes",
    description: "Theme",
  },
  {
    name: "shadow_color",
    type: "MakepadColor",
    description: "Shadow color",
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
    name: "placeholder_color",
    type: "MakepadColor",
    description: "Placeholder color",
  },
  {
    name: "color",
    type: "MakepadColor",
    description: "Color",
  },
  {
    name: "cursor_color",
    type: "MakepadColor",
    description: "Cursor color",
  },
  {
    name: "select_color",
    type: "MakepadColor",
    description: "Selection color",
  },
  {
    name: "background_color",
    type: "MakepadColor",
    description: "Background color",
  },
  {
    name: "background_visible",
    type: "bool",
    description: "Background visible",
  },
  {
    name: "visible",
    type: "bool",
    description: "Visible",
  },
  {
    name: "hover_color",
    type: "MakepadColor",
    description: "Hover color",
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
    name: "cursor_hover_color",
    type: "MakepadColor",
    description: "Cursor hover color",
  },
  {
    name: "cursor_focus_color",
    type: "MakepadColor",
    description: "Cursor focus color",
  },
  {
    name: "select_hover_color",
    type: "MakepadColor",
    description: "Selection hover color",
  },
  {
    name: "select_focus_color",
    type: "MakepadColor",
    description: "Selection focus color",
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
    name: "cursor_border_radius",
    type: "F64",
    description: "Cursor corner radius",
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
    description: "Flow mode",
  },
  {
    name: "spacing",
    type: "F64",
    description: "Spacing",
  },
  {
    name: "cursor_width",
    type: "F64",
    description: "Cursor width",
  },
  {
    name: "read_only",
    type: "bool",
    description: "Read-only",
  },
  {
    name: "numeric_only",
    type: "bool",
    description: "Numeric input only",
  },
  {
    name: "placeholder",
    type: "String",
    description: "Placeholder",
  },
  {
    name: "text",
    type: "String",
    description: "Text content",
  },
  {
    name: "event_key",
    type: "bool",
    description: "Event key",
  },
];

export const INPUT_EVENTS: Event[] = [
  {
    name: "changed",
    params: "GInputChangedParam",
    description: "Input value change event",
  },
  {
    name: "keydown_unhandled",
    params: "KeyEvent",
    description: "Unhandled key press event",
  },
  {
    name: "escaped",
    params: "_",
    description: "Esc key press event",
  },
  {
    name: "key_focus",
    params: "_",
    description: "Get keyboard focus event",
  },
  {
    name: "key_focus_lost",
    params: "_",
    description: "Lose keyboard focus event",
  },
];
