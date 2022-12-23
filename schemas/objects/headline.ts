import { defineType, defineField } from "sanity";
export default defineType({
  name: "headline",
  title: "Headline",
  type: "object",
  localize: true,
  fields: [defineField({ name: "title", title: "Title", type: "string" }), defineField({ name: "body", title: "Body", type: "excerptPortableText" })],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      console.log(arguments);
      return {
        title: "Headline: " + title,
      };
    },
  },
});
