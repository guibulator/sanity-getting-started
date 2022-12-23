import { defineType, defineField } from "sanity";
export default defineType({
  name: "testimonials",
  title: "Testimonials",
  type: "object",
  fields: [defineField({ name: "title", title: "Title", type: "string" }), defineField({ name: "body", title: "Body", type: "excerptPortableText" })],
});
