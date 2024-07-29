import {defineArrayMember, defineField, defineType} from 'sanity'

export const ratesType = defineType({
  name: 'rates',
  type: 'document',
  title: 'Rates',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({
      name: 'memberships',
      type: 'array',
      title: 'Memberships',
      of: [
        defineArrayMember({
          name: 'membership',
          type: 'membership',
        }),
      ],
    }),
  ]
})



