import { defineType, defineField } from "sanity";
export default defineType({
  name: "column",
  title: "Column",
  type: "object",
  fields: [defineField({ name: "title", title: "Title", type: "string" }), defineField({ name: "body", title: "Body", type: "bodyPortableText" })],
});
