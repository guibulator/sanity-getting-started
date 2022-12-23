import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'author',
  type: 'document',
  title: 'Author',
  preview: {
    select: {
      title: 'name',
    },
  },
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      type: 'mainImage',
      title: 'Image',
    }),
    // defineField({
    //   name: 'bio',
    //   type: 'bioPortableText',
    //   title: 'Biography',
    //   localize: true,
    // }),
  ],
})
