import {defineField, defineType} from 'sanity'

export const membershipType = defineType({
  name: 'membership',
  type: 'object',
  title: 'Membership',
  fields: [
    defineField({
      name: 'membership',
      type: 'string',
    }),
    defineField({
      name: 'frequency',
      type: 'string',
    }),
    defineField({
      name: 'rate',
      type: 'string',
    }),
  ]
})