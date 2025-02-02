import { Prop } from "./types";

const DOC = `
# \`scroll_bars\`

When the component overflows, adding a scroll bar allows the user to scroll the view

## Basic usage

\`\`\`html
<view theme="Info" height="100.0" width="100.0" clip_x="true" clip_y="true">
  <scroll_bars as_prop="scroll_bars"></scroll_bars>
  <view height="200.0" width="20.0"></view>
</view>
\`\`\`

## Properties

| Name       | Description                              | Type   |
| ---------- | ---------------------------------------- | ------ |
| \`scroll_x\` | Whether to display the x-axis scroll bar | \`bool\` |
| \`scroll_y\` | Whether to display the y-axis scroll bar | \`bool\` |

## Event callback

None
`;

export const SCROLLBARS = "scroll_bars";
export const MAP_ITEM_SCROLLBARS: [string, string] = [SCROLLBARS, DOC];
export const SCROLLBARS_PROPS: Prop[] = [
  {
    name: "scroll_x",
    type: "bool",
    description: "Whether to display the x-axis scroll bar",
  },
  {
    name: "scroll_y",
    type: "bool",
    description: "Whether to display the y-axis scroll bar",
  },
];
