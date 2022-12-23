import { defineType, defineField } from "sanity";

export default defineType({
  name: "articleReference",
  type: "object",
  title: "Article reference",
  fields: [
    defineField({
      name: "author",
      type: "reference",
      to: [
        {
          type: "author",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "author.name",
      media: "author.image.asset",
    },
  },
});
