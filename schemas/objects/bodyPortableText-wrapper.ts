import { defineType, defineField } from "sanity";
export default defineType({
  name: "bodyPortabletextWrapper",
  title: "Éditeur de texte",
  type: "object",
  localize: true,
  fields: [defineField({ name: "title", title: "Title", type: "string" }), defineField({ name: "body", title: "Body", type: "bodyPortableText" })],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      console.log(arguments);
      return {
        title: "Éditeur de texte: " + title,
      };
    },
  },
});
