import {
  CancellationToken,
  CompletionContext,
  CompletionItem,
  CompletionItemKind,
  Position,
  TextDocument,
  languages,
} from "vscode";
import { COMPONENTS, COMPONENTS_EVENTS, COMPONENTS_PROPS } from "./components";

export function register_complete_providers() {
  const lang = "gen";

  return ["<", ":", "@", "as_prop", "id", "class"].map((prefix) => {
    return languages.registerCompletionItemProvider(
      lang,
      {
        provideCompletionItems(document, position, token, context) {
          return do_completion_provide(
            prefix,
            document,
            position,
            token,
            context
          );
        },
      },
      prefix
    );
  });
}

export function do_completion_provide(
  prefix: string,
  document: TextDocument,
  position: Position,
  _token: CancellationToken,
  _context: CompletionContext
) {
  switch (prefix) {
    case "<":
      return components_completion();
    case ":":
      return prop_completion(document, position);
    case "@":
      return event_completion(document, position);
    default:
      return default_prop_completion(prefix);
  }
}

function default_prop_completion(prefix: string) {
  let msg = new Map([
    [
      "as_prop",
      "as_prop property converts a component into a property of its parent component, which comes from a way to build slots in Makepad. Currently only involved in button and view components",
    ],
    [
      "id",
      "id is the unique identifier of a component. Each component has this attribute. id can be used to obtain the corresponding component. It is also the attribute identifier of the component",
    ],
    [
      "class",
      "class is the attribute (style) identifier of a component. class can be used to merge the style (<style>) part into the component",
    ],
  ]).get(prefix);

  if (!msg) {
    return [];
  } else {
    const item = new CompletionItem(prefix, CompletionItemKind.Property);
    item.detail = msg;
    return [item];
  }
}

function prop_completion(
  document: TextDocument,
  position: Position
): CompletionItem[] {
  // 向上查找组件标签
  const component = get_component(document, position);
  if (!component) {
    return [];
  }
  let props = COMPONENTS_PROPS.get(component);
  if (!props) {
    return [];
  }
  return props.map((prop) => {
    const item = new CompletionItem(prop.name, CompletionItemKind.Property);
    item.detail = `type: ${prop.type}, ${prop.description}`;
    return item;
  });
}

function event_completion(
  document: TextDocument,
  position: Position
): CompletionItem[] {
  const component = get_component(document, position);
  if (!component) {
    return [];
  }
  let events = COMPONENTS_EVENTS.get(component);
  if (!events) {
    return [];
  }

  return events.map((event) => {
    const item = new CompletionItem(event.name, CompletionItemKind.Event);
    item.detail = `param: ${event.params}, ${event.description}`;
    return item;
  });
}

// 组件补全
function components_completion(): CompletionItem[] {
  return COMPONENTS.map((comp) => {
    const item = new CompletionItem(comp, CompletionItemKind.Class);
    item.detail = `GenUI Component: <${comp}>`;
    return item;
  });
}

/**
 * **获取当前组件的名称**
 * 1. 向上查找 `<component_name>` 标签
 * 2. 返回 `component_name`
 */
function get_component(
  document: TextDocument,
  position: Position
): string | undefined {
  for (let line = position.line; line >= 0; line--) {
    const text = document.lineAt(line).text;
    const match = text.match(/<([a-zA-Z0-9_-]+)/);
    if (match) {
      return match[1]; // 返回匹配的组件名称
    }
  }
  return undefined;
}
