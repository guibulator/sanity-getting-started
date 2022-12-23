import { defineType, defineField } from "sanity";

export default defineType({
  name: "page",
  type: "document",
  title: "Pages",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    // defineField({
    //   name: "pageBuilder",
    //   type: "pageBuilder",
    //   title: "Page Builder",
    // }),
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug",
    },
    prepare({ title = "No title", slug = {} }) {
      return {
        title,
        subtitle: slug.current,
      };
    },
  },
});
