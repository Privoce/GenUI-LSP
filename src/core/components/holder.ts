const DOC_TEMPLATE = `
# Component template

Component template refers to the part of the file with the suffix \`.gen\` that is wrapped by the \`<template>\` tag and used to describe the page structure.

for more information, please refer to the [GenUI temnplate](https://privoce.github.io/GenUI.github.io/doc/tutorial/template/basic).

## Basic syntax

\`\`\`html
<template>
    <$component_name
        $($($static_prop="$prop_value")*)?
        $($(:$bind_prop="$bind_ident")*)?
        $($(@callback="$callback_ident($($arg),*)")*)?
    >
        // ...
    </$component_name>
</template>
\`\`\`

> - \`$component_name\`: component name
> - \`$static_prop\`: static property
> - \`$prop_value\`: property value
> - \`$bind_prop\`: binding property
> - \`$bind_ident\`: binding variable identifier
> - \`$callback\`: callback
> - \`$callback_ident\`: callback method identifier
> - \`$arg\`: parameter
> - \`$()*\`: many1, 1 or more
> - \`$()?\`: recognize, 0 or 1
`;

const DOC_SCRIPT = `
# Script

The script part of \`GenUI\` uses the Rust language and is wrapped in the \`<script>\` tag in the \`.gen\` file.

for more information, please refer to the [GenUI script](https://privoce.github.io/GenUI.github.io/doc/tutorial/script).

> [!TIP]
>
> This document only briefly describes the use of the script part. For specific documents, please refer to: [API](/zh/api/index)

## Define component properties

For custom components, we need to use the \`#[prop]\` macro to declare the component's properties, but not all types are allowed. The types that can be used in the properties need to implement the \`Default\` trait.

\`\`\`rust
<script>
#[prop]
pub struct MyView{
    name: String
}
</script>
\`\`\`
`;

const DOC_STYLE = `
# Prop (style)

Component Prop (style), wrapped by \`<style></style>\` tags in the \`.gen\` file, are used to write component Prop.

The prop part will be merged into the component during compilation and indexed by \`id\` or \`class\`.

for more information, please refer to the [GenUI style](https://privoce.github.io/GenUI.github.io/doc/tutorial/script).

## Syntax

\`\`\`html
<style>
  $($($style_ident{
      $prop_key: $prop_value;
  })*)?
</style>
\`\`\`

> - \`$style_ident\`: property identifier (\`id\` or \`class\`)
> - \`$prop_key\`: property
> - \`$prop_value\`: property value
`;


export const TEMPLATE = "template";
export const SCRIPT = "script";
export const STYLE = "style";

export const MAP_ITEM_TEMPLATE: [string, string] = [TEMPLATE, DOC_TEMPLATE];
export const MAP_ITEM_SCRIPT: [string, string] = [SCRIPT, DOC_SCRIPT];
export const MAP_ITEM_STYLE: [string, string] = [STYLE, DOC_STYLE];