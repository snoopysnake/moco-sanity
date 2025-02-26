import {defineArrayMember, defineField, defineType} from 'sanity'

export const coachesType = defineType({
  name: 'coaches',
  type: 'document',
  title: 'Coaches',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'headshot',
      type: 'image',
      title: 'Headshot',
    }),
    defineField({
      name: 'thumbnail',
      type: 'image',
      title: 'Thumbnail',
    }),
    defineField({
      name: 'bio',
      type: 'text',
      title: 'Bio',
    }),
    defineField({
      name: 'certs',
      type: 'array',
      title: 'Certifications',
      of: [
        defineArrayMember({
          name: 'cert',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'headCoach',
      type: 'boolean',
      title: 'Head Coach?'
    }),
  ],
  initialValue: {
    headCoach: false
  }
})