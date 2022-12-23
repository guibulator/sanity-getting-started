import { defineType, defineField } from "sanity";
export default defineType({
  name: "hero",
  type: "object",
  title: "Content",
  fields: [defineField({ name: "title", type: "string", title: "Title" }), defineField({ name: "image", type: "mainImage", title: "Image" })],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title: "Hero: " + title,
        media,
        subtitle: "Content",
      };
    },
  },
});
