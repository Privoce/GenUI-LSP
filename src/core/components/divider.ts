import { Prop } from "./types";

const DOC = `
# \`divider\`

Used to split content, it inherits from the \`view\` component.

## Example

### Basic usage

\`\`\`html
<view spacing="40.0">
  <label text="'Hello'"></label>
  <divider theme="Info"></divider>
  <divider theme="Error">
    <label text="'I am a divider'"></label>
  </divider>
  <divider theme="Success">
    <view height="Fit" width="Fit" padding="6.0">
      <button></button>
    </view>
  </divider>
  <divider theme="Warning"></divider>
  <label text="'World'"></label>
</view>
\`\`\`

## Properties

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
| \`deref_widget\`       | Reference view properties  | \`ViewProps\`    |
| \`stroke_width\`       | Stroke width               | \`F32\`          |
| \`direction\`          | Divider direction          | \`Direction\`    |

## Event callback

None

`;

export const DIVIDER = "divider";
export const MAP_ITEM_DIVIDER: [string, string] = [DIVIDER, DOC];
export const DIVIDER_PROPS: Prop[] = [
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
  {
    name: "deref_widget",
    type: "ViewProps",
    description: "Reference view properties",
  },
  {
    name: "stroke_width",
    type: "F32",
    description: "Stroke width",
  },
  {
    name: "direction",
    type: "Direction",
    description: "Divider direction",
  },
];
