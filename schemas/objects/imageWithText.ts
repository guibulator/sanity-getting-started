import { defineType, defineField } from "sanity";
export default defineType({
  name: "imageWithText",
  title: "Image with text",
  type: "object",
  fields: [defineField({ name: "title", title: "Title", type: "string" }), defineField({ name: "body", title: "Body", type: "excerptPortableText" })],
});
