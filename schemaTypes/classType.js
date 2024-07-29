import {defineArrayMember,defineField, defineType} from 'sanity'

// for crossfit classes
export const classType = defineType({
  name: 'class',
  type: 'object',
  fields: [
    defineField({
      name: 'classtimesAM',
      type: 'array',
      title: 'AM',
      of: [
        defineArrayMember({
          name: 'classtime',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'classtimesPM',
      type: 'array',
      title: 'PM',
      of: [
        defineArrayMember({
          name: 'classtime',
          type: 'string',
        }),
      ],
    }),
  ]
})