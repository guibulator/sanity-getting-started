import { defineType, defineField } from "sanity";
export default defineType({
  name: "categoryReference",
  type: "object",
  title: "Category reference",
  fields: [
    defineField({
      name: "category",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "category.title",
    },
  },
});
