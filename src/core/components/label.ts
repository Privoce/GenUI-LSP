import { Prop, Event } from "./types";

const DOC = `
# \`label\`

The \`label\` component is a customizable label widget with animation and event handling capabilities. It allows hover, focus, and text styling via various properties, animations, and events.

## Examples

### Basic Usage

\`\`\`html
<label text="'Hello World'" font_size="16.0" color="#FFF"> </label>
\`\`\`

### About font family

Use the built-in \`dep\` function

\`\`\`html
<label
  text="'Hello World'"
  font_family="dep('crate://self/path/to/font/family')"
>
</label>
\`\`\`

## Properties

| Name                 | Description                   | Type             |
| -------------------- | ----------------------------- | ---------------- |
| \`theme\`              | Theme                         | \`Themes\`         |
| \`color\`              | Color                         | \`MakepadColor\`   |
| \`stroke_hover_color\` | Font color when hovering      | \`MakepadColor\`   |
| \`stroke_focus_color\` | Font color when getting focus | \`MakepadColor\`   |
| \`font_size\`          | Font size                     | \`F64\`            |
| \`cursor\`             | Mouse cursor                  | \`MouseCursor\`    |
| \`line_spacing\`       | Line spacing                  | \`F64\`            |
| \`height_factor\`      | Height factor                 | \`F64\`            |
| \`wrap\`               | Text wrapping method          | \`TextWrap\`       |
| \`font_family\`        | Font type                     | \`LiveDependency\` |
| \`visible\`            | Visible or not                | \`bool\`           |
| \`height\`             | height                        | \`Size\`           |
| \`width\`              | width                         | \`Size\`           |
| \`margin\`             | margin                        | \`Margin\`         |
| \`padding\`            | padding                       | \`Padding\`        |
| \`align\`              | alignment                     | \`Align\`          |
| \`text\`               | text content                  | \`String\`         |
| \`animation_key\`      | whether to allow animation    | \`bool\`           |
| \`event_key\`          | whether to allow events       | \`bool\`           |
| \`grabKey_focus\`      | whether to capture key focus  | \`bool\`           |

## Event callback

| Name         | Description       | Parameters             |
| ------------ | ----------------- | ---------------------- |
| \`hover_in\`   | mouse enter event | \`GLabelHoverParam\`     |
| \`hover_out\`  | mouse leave event | \`GLabelHoverParam\`     |
| \`focus\`      | get focus event   | \`GLabelFocusParam\`     |
| \`focus_lost\` | Focus lost event  | \`GLabelFocusLostParam\` |
`;

export const LABEL = "label";
export const MAP_ITEM_LABEL: [string, string] = [LABEL, DOC];

export const LABEL_PROPS: Prop[] = [
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
    name: "stroke_hover_color",
    type: "MakepadColor",
    description: "Font color when hovering",
  },
  {
    name: "stroke_focus_color",
    type: "MakepadColor",
    description: "Font color when getting focus",
  },
  {
    name: "font_size",
    type: "F64",
    description: "Font size",
  },
  {
    name: "cursor",
    type: "MouseCursor",
    description: "Mouse cursor",
  },
  {
    name: "line_spacing",
    type: "F64",
    description: "Line spacing",
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
    description: "Font type",
  },
  {
    name: "visible",
    type: "bool",
    description: "Visible or not",
  },
  {
    name: "height",
    type: "Size",
    description: "Height",
  },
  {
    name: "width",
    type: "Size",
    description: "Width",
  },
  {
    name: "margin",
    type: "Margin",
    description: "Margin",
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
    name: "text",
    type: "String",
    description: "Text content",
  },
  {
    name: "animation_key",
    type: "bool",
    description: "Whether to allow animation",
  },
  {
    name: "event_key",
    type: "bool",
    description: "Whether to allow events",
  },
  {
    name: "grabKey_focus",
    type: "bool",
    description: "Whether to capture key focus",
  },
];
export const LABEL_EVENTS: Event[] = [
  {
    name: "hover_in",
    params: "GLabelHoverParam",
    description: "Mouse enter event",
  },
  {
    name: "hover_out",
    params: "GLabelHoverParam",
    description: "Mouse leave event",
  },
  {
    name: "focus",
    params: "GLabelFocusParam",
    description: "Get focus event",
  },
  {
    name: "focus_lost",
    params: "GLabelFocusLostParam",
    description: "Focus lost event",
  },
];
