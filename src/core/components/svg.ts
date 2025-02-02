import { Prop, Event } from "./types";

const DOC = `
# \`svg\`

Display icon files with the suffix \`.svg\`

## Example

### Basic usage

Make sure the icon address exists before use. Use the \`dep\` built-in function to point to the icon address. This function can use an absolute address. In the following example, \`crate://self/\` represents the project root directory.

\`\`\`html
<svg src="dep('crate://self/resources/genui.svg')"></svg>
\`\`\`

## Attributes

| Name                 | Description                | Type             |
| -------------------- | -------------------------- | ---------------- |
| \`theme\`              | Theme                      | \`Themes\`         |
| \`brightness\`         | Brightness                 | \`F32\`            |
| \`curve\`              | Curve                      | \`F32\`            |
| \`linearize\`          | Linearize                  | \`F32\`            |
| \`src\`                | SVG resource path          | \`LiveDependency\` |
| \`scale\`              | Scale                      | \`F64\`            |
| \`color\`              | Color                      | \`MakepadColor\`   |
| \`draw_depth\`         | Draw depth                 | \`F32\`            |
| \`stroke_hover_color\` | Stroke color when hovering | \`MakepadColor\`   |
| \`stroke_focus_color\` | Stroke color when focused  | \`MakepadColor\`   |
| \`cursor\`             | Mouse pointer style        | \`MouseCursor\`    |
| \`grab_key_focus\`     | Capture keyboard focus     | \`bool\`           |
| \`visible\`            | Visible                    | \`bool\`           |
| \`animation_key\`      | Animation key              | \`bool\`           |
| \`abs_pos\`            | Absolute position          | \`DVec2\`          |
| \`margin\`             | Margin                     | \`Margin\`         |
| \`width\`              | Width                      | \`Size\`           |
| \`height\`             | Height                     | \`Size\`           |
| \`scroll\`             | Scroll offset              | \`DVec2\`          |
| \`clip_x\`             | Clip X axis                | \`bool\`           |
| \`clip_y\`             | Clip Y axis                | \`bool\`           |
| \`padding\`            | Padding                    | \`Padding\`        |
| \`align\`              | Alignment                  | \`Align\`          |
| \`flow\`               | Flow mode                  | \`Flow\`           |
| \`spacing\`            | Spacing                    | \`F64\`            |
| \`event_key\`          | Event key                  | \`bool\`           |

## Event callback

| Name         | Description       | Parameters           |
| ------------ | ----------------- | -------------------- |
| \`clicked\`    | Click event       | \`GSvgClickedParam\`   |
| \`hover_in\`   | Mouse hover event | \`GSvgHoverParam\`     |
| \`hover_out\`  | Mouse out event   | \`GSvgHoverParam\`     |
| \`focus\`      | Focus event       | \`GSvgFocusParam\`     |
| \`focus_lost\` | Lost focus event  | \`GSvgFocusLostParam\` |
`;

export const SVG = "svg";
export const MAP_ITEM_SVG: [string, string] = [SVG, DOC];
export const SVG_PROPS: Prop[] = [
  {
    name: "theme",
    type: "Themes",
    description: "Theme",
  },
  {
    name: "brightness",
    type: "F32",
    description: "Brightness",
  },
  {
    name: "curve",
    type: "F32",
    description: "Curve",
  },
  {
    name: "linearize",
    type: "F32",
    description: "Linearize",
  },
  {
    name: "src",
    type: "LiveDependency",
    description: "SVG resource path",
  },
  {
    name: "scale",
    type: "F64",
    description: "Scale",
  },
  {
    name: "color",
    type: "MakepadColor",
    description: "Color",
  },
  {
    name: "draw_depth",
    type: "F32",
    description: "Draw depth",
  },
  {
    name: "stroke_hover_color",
    type: "MakepadColor",
    description: "Stroke color when hovering",
  },
  {
    name: "stroke_focus_color",
    type: "MakepadColor",
    description: "Stroke color when focused",
  },
  {
    name: "cursor",
    type: "MouseCursor",
    description: "Mouse pointer style",
  },
  {
    name: "grab_key_focus",
    type: "bool",
    description: "Capture keyboard focus",
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
    name: "event_key",
    type: "bool",
    description: "Event key",
  },
];

export const SVG_EVENTS: Event[] = [
  {
    name: "clicked",
    params: "GSvgClickedParam",
    description: "Click event",
  },
  {
    name: "hover_in",
    params: "GSvgHoverParam",
    description: "Mouse hover event",
  },
  {
    name: "hover_out",
    params: "GSvgHoverParam",
    description: "Mouse out event",
  },
  {
    name: "focus",
    params: "GSvgFocusParam",
    description: "Focus event",
  },
  {
    name: "focus_lost",
    params: "GSvgFocusLostParam",
    description: "Lost focus event",
  },
];
