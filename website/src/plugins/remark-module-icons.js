import { visit } from 'unist-util-visit';

export default function remarkModuleIcons() {
  return (tree) => {
    visit(tree, 'listItem', (node) => {
      if (node.children?.[0]?.type === 'paragraph') {
        const paragraph = node.children[0];
        const textNode = paragraph.children?.[0];

        if (textNode && textNode.type === 'text'
            && (
                textNode.value.startsWith('module-')
                || textNode.value.startsWith('modulegroup-')
            )
        ) {
          const text = textNode.value.trim();
          const parts = text.split(',');
          const identifier = parts[0];
          const color = parts[1];
          const parent = parts[2];
          const description = parts[3];

          paragraph.children = [
            {
              type: 'mdxJsxTextElement',
              name: 'ModuleIcon',
              attributes: [
                {
                  type: 'mdxJsxAttribute', // Must be explicitly mdxJsxAttribute
                  name: 'id',
                  value: identifier,
                },
                {
                  type: 'mdxJsxAttribute',
                  name: 'color',
                  value: color,
                },
                {
                  type: 'mdxJsxAttribute',
                  name: 'parent',
                  value: parent,
                },
                {
                  type: 'mdxJsxAttribute',
                  name: 'description',
                  value: description,
                },
              ],
              children: [],
            },
          ];
        }
      }
    });
  };
}
