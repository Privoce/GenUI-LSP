import { Prop, Event } from "./types";
const DOC = `
# \`button\`

A customizable button designed for interactive UI elements. It supports hover, focus, and click animations, and has various configurable appearance properties, including background color, shadow, and border style.

## Example

### Basic Usage

\`\`\`html
<button>
  <label as_prop="slot" text="'Hello'"></label>
</button>
\`\`\`

### Define inner

\`\`\`html
<button>
  <view as_prop="slot">
    <label text="'Hello'"></label>
    <label text="'World'"></label>
  </view>
</button>
\`\`\`

## Properties

| Name                 | Description                | Type           |
| -------------------- | -------------------------- | -------------- |
| \`theme\`              | Theme                      | \`Themes\`       |
| \`background_color\`   | Background color           | \`MakepadColor\` |
| \`background_visible\` | Is the background visible  | \`bool\`         |
| \`hover_color\`        | Hover color                | \`MakepadColor\` |
| \`focus_color\`        | Focus color                | \`MakepadColor\` |
| \`shadow_color\`       | Shadow color               | \`MakepadColor\` |
| \`spread_radius\`      | Shadow spread radius       | \`F32\`          |
| \`blur_radius\`        | Shadow blur radius         | \`F32\`          |
| \`shadow_offset\`      | Shadow offset              | \`Vec2\`         |
| \`border_color\`       | Border color               | \`MakepadColor\` |
| \`border_width\`       | Border width               | \`F32\`          |
| \`border_radius\`      | Border radius              | \`F32\`          |
| \`cursor\`             | Mouse pointer              | \`MouseCursor\`  |
| \`visible\`            | Visible or not             | \`bool\`         |
| \`grab_key_focus\`     | Grab keyboard focus or not | \`bool\`         |
| \`animation_key\`      | Animation key              | \`bool\`         |
| \`event_key\`          | Event key                  | \`bool\`         |
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

## Event callback

| Name         | Description       | Parameters              |
| ------------ | ----------------- | ----------------------- |
| \`hover_in\`   | Mouse enter event | \`GButtonHoverParam\`     |
| \`hover_out\`  | Mouse leave event | \`GButtonHoverParam\`     |
| \`clicked\`    | Click event       | \`GButtonClickedParam\`   |
| \`focus\`      | Get focus event   | \`GButtonFocusParam\`     |
| \`focus_lost\` | Lose focus event  | \`GButtonFocusLostParam\` |

`;

export const BUTTON = "button";
export const MAP_ITEM_BUTTON: [string, string] = [BUTTON, DOC];
export const BUTTON_PROPS: Prop[] = [
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
    name: "background_visible",
    type: "bool",
    description: "Is the background visible",
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
    name: "cursor",
    type: "MouseCursor",
    description: "Mouse pointer",
  },
  {
    name: "visible",
    type: "bool",
    description: "Visible or not",
  },
  {
    name: "grab_key_focus",
    type: "bool",
    description: "Grab keyboard focus or not",
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
];

export const BUTTON_EVENTS: Event[] = [
  {
    name: "hover_in",
    params: "GButtonHoverParam",
    description: "Mouse enter event",
  },
  {
    name: "hover_out",
    params: "GButtonHoverParam",
    description: "Mouse leave event",
  },
  {
    name: "clicked",
    params: "GButtonClickedParam",
    description: "Click event",
  },
  {
    name: "focus",
    params: "GButtonFocusParam",
    description: "Get focus event",
  },
  {
    name: "focus_lost",
    params: "GButtonFocusLostParam",
    description: "Lose focus event",
  },
];
