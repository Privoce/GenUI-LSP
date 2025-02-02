import { Prop, Event } from "./types";

const DOC = `
# \`link\`

Used to link to an address, with an underline effect by default.

## Example

### Basic usage

\`\`\`html
<link theme="Info" text="'Github'" href="'https://www.github.com'"></link>
\`\`\`

### Button link

\`\`\`html
<link
    theme="Info"
    text="'Github'"
    href="'https://www.github.com'"
    padding="10.0 16.0"
    border_radius="2.0"
    underline_visible="false"
    background_visible="true">
</link>
\`\`\`

## Properties

| Name                    | Description                   | Type             |
| ----------------------- | ----------------------------- | ---------------- |
| \`theme\`                 | Theme                         | \`Themes\`         |
| \`background_color\`      | Background color              | \`MakepadColor\`   |
| \`hover_color\`           | Hover color                   | \`MakepadColor\`   |
| \`focus_color\`           | Focus color                   | \`MakepadColor\`   |
| \`border_color\`          | Border color                  | \`MakepadColor\`   |
| \`underline_visible\`     | Whether to display underline  | \`bool\`           |
| \`underline_color\`       | Underline color               | \`MakepadColor\`   |
| \`underline_hover_color\` | Underline color when hovering | \`MakepadColor\`   |
| \`underline_focus_color\` | Underline color when focusing | \`MakepadColor\`   |
| \`underline_width\`       | Underline width               | \`F32\`            |
| \`border_radius\`         | Border corner radius          | \`F32\`            |
| \`round\`                 | Is it a circle                | \`bool\`           |
| \`background_visible\`    | Is the background visible     | \`bool\`           |
| \`text\`                  | Text content                  | \`String\`         |
| \`font_size\`             | Font size                     | \`F64\`            |
| \`color\`                 | Font color                    | \`MakepadColor\`   |
| \`text_hover_color\`      | Font color when hovering      | \`MakepadColor\`   |
| \`text_focus_color\`      | Font color when focused       | \`MakepadColor\`   |
| \`font_family\`           | Font family path              | \`LiveDependency\` |
| \`cursor\`                | Mouse pointer style           | \`MouseCursor\`    |
| \`href\`                  | Hyperlink address             | \`String\`         |
| \`link_type\`             | Link type                     | \`LinkType\`       |
| \`visible\`               | Is it visible                 | \`bool\`           |
| \`abs_pos\`               | Absolute position             | \`DVec2\`          |
| \`margin\`                | margin                        | \`Margin\`         |
| \`width\`                 | width                         | \`Size\`           |
| \`height\`                | height                        | \`Size\`           |
| \`scroll\`                | scroll offset                 | \`DVec2\`          |
| \`clip_x\`                | clip X axis or not            | \`bool\`           |
| \`clip_y\`                | clip Y axis or not            | \`bool\`           |
| \`padding\`               | padding                       | \`Padding\`        |
| \`align\`                 | alignment                     | \`Align\`          |
| \`flow\`                  | flow                          | \`Flow\`           |
| \`spacing\`               | spacing                       | \`F64\`            |
| \`animation_key\`         | animation key                 | \`bool\`           |
| \`event_key\`             | event key                     | \`bool\`           |
| \`grab_key_focus\`        | capture keyboard focus        | \`bool\`           |

## Event callback

| Name         | Description       | Parameters            |
| ------------ | ----------------- | --------------------- |
| \`hover_in\`   | Mouse hover event | \`GLinkHoverParam\`     |
| \`hover_out\`  | Mouse out event   | \`GLinkHoverParam\`     |
| \`clicked\`    | Click event       | \`GLinkClickedParam\`   |
| \`focus\`      | Focus event       | \`GLinkFocusParam\`     |
| \`focus_lost\` | Lost focus event  | \`GLinkFocusLostParam\` |
`;

export const LINK = "link";
export const MAP_ITEM_LINK: [string, string] = [LINK, DOC];
export const LINK_PROPS: Prop[] = [
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
    name: "underline_visible",
    type: "bool",
    description: "Whether to display underline",
  },
  {
    name: "underline_color",
    type: "MakepadColor",
    description: "Underline color",
  },
  {
    name: "underline_hover_color",
    type: "MakepadColor",
    description: "Underline color when hovering",
  },
  {
    name: "underline_focus_color",
    type: "MakepadColor",
    description: "Underline color when focusing",
  },
  {
    name: "underline_width",
    type: "F32",
    description: "Underline width",
  },
  {
    name: "border_radius",
    type: "F32",
    description: "Border corner radius",
  },
  {
    name: "round",
    type: "bool",
    description: "Is it a circle",
  },
  {
    name: "background_visible",
    type: "bool",
    description: "Is the background visible",
  },
  {
    name: "text",
    type: "String",
    description: "Text content",
  },
  {
    name: "font_size",
    type: "F64",
    description: "Font size",
  },
  {
    name: "color",
    type: "MakepadColor",
    description: "Font color",
  },
  {
    name: "text_hover_color",
    type: "MakepadColor",
    description: "Font color when hovering",
  },
  {
    name: "text_focus_color",
    type: "MakepadColor",
    description: "Font color when focused",
  },
  {
    name: "font_family",
    type: "LiveDependency",
    description: "Font family path",
  },
  {
    name: "cursor",
    type: "MouseCursor",
    description: "Mouse pointer style",
  },
  {
    name: "href",
    type: "String",
    description: "Hyperlink address",
  },
  {
    name: "link_type",
    type: "LinkType",
    description: "Link type",
  },
  {
    name: "visible",
    type: "bool",
    description: "Is it visible",
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
    name: "animation_key",
    type: "bool",
    description: "Animation key",
  },
  {
    name: "event_key",
    type: "bool",
    description: "Event key",
  },
  {
    name: "grab_key_focus",
    type: "bool",
    description: "Capture keyboard focus",
  },
];

export const LINK_EVENTS: Event[] = [
  {
    name: "hover_in",
    params: "GLinkHoverParam",
    description: "Mouse hover event",
  },
  {
    name: "hover_out",
    params: "GLinkHoverParam",
    description: "Mouse out event",
  },
  {
    name: "clicked",
    params: "GLinkClickedParam",
    description: "Click event",
  },
  {
    name: "focus",
    params: "GLinkFocusParam",
    description: "Focus event",
  },
  {
    name: "focus_lost",
    params: "GLinkFocusLostParam",
    description: "Lost focus event",
  },
];
