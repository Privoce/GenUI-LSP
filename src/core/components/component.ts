const DOC = `
## Custom Components

Custom components refer to components that are secondary developed based on existing components during development.

To put it simply, any component wrapped with \`<component name="SpecialName"></component>\` is a custom component.

1. The \`name\` of a custom component indicates the component name when the component is referenced externally
2. Custom components can also have an \`id\` attribute. \`id\` and \`name\` are independent of each other. For custom components, \`id\` is only valid internally, and \`name\` is valid externally. That is: [Inside-outside principle](/zh/doc/tutorial/template/basic#Inside-outside principle)
3. The \`<component>\` tag has no meaning, it only represents the declaration of the custom component
4. Custom components inherit the \`view\` component by default, so the properties of the \`view\` component can also be used by custom components
5. Custom components do not inherit the callbacks of the \`view\` component, only the properties
6. The \`<component>\` tag can only be used at the root
`;

export const COMPONENT = "component";
export const MAP_ITEM_COMPONENT: [string, string] = [COMPONENT, DOC];
