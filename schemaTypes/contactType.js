import {defineField, defineType} from 'sanity'

export const contactType = defineType({
  name: 'contact',
  type: 'document',
  title: 'Contact',
  fields: [
    defineField({
      name: 'method',
      type: 'string',
      title: 'Method',
    }),
    defineField({
      name: 'contactInfo',
      type: 'string',
      title: 'Contact Info',
    }),
    defineField({
      name: 'link',
      type: 'string',
      title: 'Link',
    }),
  ],
})