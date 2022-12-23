import { defineType, defineField } from "sanity";
// import { YoutubePreview } from "../../src/previews/Youtube";

export default defineType({
  name: "youtube",
  type: "object",
  title: "YouTube Embed",
  fields: [
    defineField({
      name: "url",
      type: "url",
      title: "YouTube video URL",
      preview: {
        select: {
          url: "url",
        },
      },
      // components: {
      //   preview: YoutubePreview,
      // },
    }),
  ],
});
