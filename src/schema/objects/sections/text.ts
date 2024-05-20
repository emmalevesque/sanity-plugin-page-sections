import {defineType} from "sanity";

import {TextIcon} from "@sanity/icons";

export default defineType({
  name: "section.text",
  title: "Text",
  type: "object",
  icon: TextIcon,
  fields: [
    {
      name: "text",
      title: "Text",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            {title: "Normal", value: "normal"},
            {title: "Display", value: 'display'},
            {title: "H3", value: "h3"},
            {title: "H4", value: "h4"},
            {title: "Quote", value: "blockquote"},
          ],
          marks: {
            decorators: [
              {title: "Strong", value: "strong"},
              {title: "Emphasis", value: "em"},
              {title: "Underline", value: "underline"},
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "External link",
                fields: [
                  {
                    name: "href",
                    title: "URL",
                    type: "url",
                    validation: (Rule) =>
                      Rule.uri({
                        scheme: ["http", "https", "mailto", "tel"],
                      }),
                  },
                  {
                    name: 'page',
                    title: 'Page',
                    type: 'reference',
                    to: [{ type: 'page' }, {type: 'project'}, {type: 'publication'}]
                  }
                ],
              },
            ]
          },
        },
      ],
    },
  ],
});
