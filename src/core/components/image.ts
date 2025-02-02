import { Prop, Event } from "./types";

const DOC = `
# \`image\`

Display images. Currently, the following formats are allowed:

- \`jpg\`
- \`png\`

## Example

### Basic usage

Please make sure the image address exists before use. Use the \`dep\` built-in function to point to the image address. This function can use an absolute address. In the following example, \`crate://self/\` represents the project root directory.

\`\`\`html
<image src="dep('crate://self/resources/genui.png')"></image>
\`\`\`

## Attributes

| Name             | Description            | Type             |
| ---------------- | ---------------------- | ---------------- |
| \`visible\`        | Visible or not         | \`bool\`           |
| \`grab_key_focus\` | Capture keyboard focus | \`bool\`           |
| \`opacity\`        | Opacity                | \`F32\`            |
| \`cursor\`         | Mouse pointer style    | \`MouseCursor\`    |
| \`scale\`          | Scale ratio            | \`F64\`            |
| \`fit\`            | Image fit method       | \`ImageFit\`       |
| \`src\`            | Image resource path    | \`LiveDependency\` |
| \`min_width\`      | Minimum width          | \`i64\`            |
| \`min_height\`     | Minimum height         | \`i64\`            |
| \`rotation\`       | Rotation angle         | \`F32\`            |
| \`abs_pos\`        | Absolute position      | \`DVec2\`          |
| \`margin\`         | Margin                 | \`Margin\`         |
| \`width\`          | width                  | \`Size\`           |
| \`height\`         | height                 | \`Size\`           |
| \`scroll\`         | scroll offset          | \`DVec2\`          |
| \`clip_x\`         | clip X axis or not     | \`bool\`           |
| \`clip_y\`         | clip Y axis or not     | \`bool\`           |
| \`padding\`        | padding                | \`Padding\`        |
| \`align\`          | alignment              | \`Align\`          |
| \`flow\`           | flow mode              | \`Flow\`           |
| \`spacing\`        | spacing                | \`F64\`            |
| \`event_key\`      | event key              | \`bool\`           |

## event callback

| name        | description       | parameters           |
| ----------- | ----------------- | -------------------- |
| \`hover_in\`  | mouse hover event | \`GImageHoverParam\`   |
| \`hover_out\` | Mouse over event  | \`GImageHoverParam\`   |
| \`clicked\`   | Click event       | \`GImageClickedParam\` |
`;

export const IMAGE = "image";
export const MAP_ITEM_IMAGE: [string, string] = [IMAGE, DOC];
export const IMAGE_PROPS: Prop[] = [
  {
    name: "visible",
    type: "bool",
    description: "Visible or not",
  },
  {
    name: "grab_key_focus",
    type: "bool",
    description: "Capture keyboard focus",
  },
  {
    name: "opacity",
    type: "F32",
    description: "Opacity",
  },
  {
    name: "cursor",
    type: "MouseCursor",
    description: "Mouse pointer style",
  },
  {
    name: "scale",
    type: "F64",
    description: "Scale ratio",
  },
  {
    name: "fit",
    type: "ImageFit",
    description: "Image fit method",
  },
  {
    name: "src",
    type: "LiveDependency",
    description: "Image resource path",
  },
  {
    name: "min_width",
    type: "i64",
    description: "Minimum width",
  },
  {
    name: "min_height",
    type: "i64",
    description: "Minimum height",
  },
  {
    name: "rotation",
    type: "F32",
    description: "Rotation angle",
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
    name: "event_key",
    type: "bool",
    description: "Event key",
  },
];
export const IMAGE_EVENTS: Event[] = [
  {
    name: "hover_in",
    params: "GImageHoverParam",
    description: "Mouse hover event",
  },
  {
    name: "hover_out",
    params: "GImageHoverParam",
    description: "Mouse over event",
  },
  {
    name: "clicked",
    params: "GImageClickedParam",
    description: "Click event",
  },
];
