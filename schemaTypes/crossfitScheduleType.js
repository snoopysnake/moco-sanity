import { defineArrayMember, defineField, defineType } from 'sanity'

export const crossfitScheduleType = defineType({
  name: 'crossfitSchedule',
  type: 'document',
  title: 'CrossFit Schedule',
  fields: [
    defineField({
      name: 'day',
      type: 'string',
      title: 'Day',
      of: [
        defineArrayMember({
          name: 'classtime',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'classtimes',
      type: 'class',
      title: 'Class Times',
      of: [
        defineArrayMember({
          name: 'classtime',
          type: 'string',
        }),
      ],
    }),
  ]
})