import { defineType, defineField } from "sanity";
export default defineType({
  name: "forms",
  title: "Forms",
  type: "object",
  fields: [defineField({ name: "title", title: "Title", type: "string" }), defineField({ name: "body", title: "Body", type: "excerptPortableText" })],
});
