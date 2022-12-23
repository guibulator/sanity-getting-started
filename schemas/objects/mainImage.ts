import {defineType, defineField} from 'sanity'
export default defineType({
  name: 'mainImage',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'caption',
      type: 'string',
      title: 'Caption',
      description: "Caption: Texte sur l'image",
      localize: true,
    }),
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Alt: Important pour SEO et accessibilité.',
      // TODO: make validation rules based on available languages??
      // validation: (Rule) => Rule.error('You have to fill out the alternative text.').required(),
      localize: true,
    }),
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption',
    },
  },
})
