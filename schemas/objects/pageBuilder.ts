import { defineType, defineField } from "sanity";
export default defineType({
  name: "pageBuilder",
  type: "array",
  title: "Sections",
  of: [
    {
      type: "hero",
      title: "Hero",
    },
    {
      type: "headline",
      title: "Headline",
    },
    {
      type: "forms",
      title: "Formulaire",
    },
    {
      type: "imageWithText",
      title: "Texte avec image",
    },
    {
      type: "testimonials",
      title: "Testimoniale",
    },
    {
      type: "bodyPortabletextWrapper",
      title: "Éditeur de texte",
    },
    {
      type: "articleReference",
      title: "Articles",
    },
  ],
});
