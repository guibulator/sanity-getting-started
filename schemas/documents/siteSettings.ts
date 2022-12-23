import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'siteMeta',
  type: 'document',
  title: 'Configuration du site',
  groups: [
    {name: 'tab', title: 'Information générale'},
    {name: 'seo', title: 'SEO'},
  ],
  // __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    defineField({
      name: 'companyName',
      type: 'string',
      title: 'Nom de compagnie',
      group: 'tab',
    }),
    defineField({
      name: 'siteUrl',
      type: 'url',
      title: 'Url du site web',
      group: 'tab',
    }),
    defineField({
      name: 'companySloguan',
      type: 'text',
      title: 'Sloguan de la compagnie',
      localize: true,
      group: 'tab',
    }),
    defineField({
      name: 'phone',
      type: 'string',
      title: 'Téléphone service à la clientèle',
      group: 'tab',
    }),
    defineField({
      name: 'postalAddress',
      type: 'string',
      title: 'Adresse postale de la compagnie',
      group: 'tab',
    }),
    defineField({
      title: 'Adresse courriel principale',
      type: 'string',
      name: 'email',
      group: 'tab',
    }),
    defineField({
      name: 'seo',
      type: 'object',
      title: 'Optimisation des engins de recherches (SEO)',
      group: 'seo',
      fields: [
        defineField({
          name: 'titleSeo',
          type: 'string',
          title: 'Sloguan de la compagnie',
          description: "Sera utilisé lorsqu'aucun titre ne sera définit pour des pages",
          localize: true,
        }),
        defineField({
          name: 'descriptionSeo',
          type: 'string',
          title: 'Description SEO par défaut',
          description: "Sera utilisé lorsqu'aucune description ne sera définie pour des pages",
          localize: true,
        }),
        defineField({
          name: 'defaultAlt',
          type: 'string',
          title: 'Image alt par défaut',
          description: "Sera utilisé lorsqu'aucun ALT ne sera définie pour une image",
          localize: true,
        }),
        defineField({
          name: 'keywords',
          type: 'array',
          title: 'Keywords',
          description: "Liste de mots clés représentant le secteur d'activité principal",
          of: [{type: 'string'}],
          options: {
            layout: 'tags',
          },
          localize: true,
        }),
      ],
    }),
    defineField({
      name: 'author',
      type: 'reference',
      description: 'Information about company owner',
      title: 'Author',
      to: [{type: 'author'}],
    }),
  ],
})
