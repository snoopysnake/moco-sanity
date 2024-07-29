import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        defineArrayMember({
          name: 'hero',
          type: 'hero',
        }),
        defineArrayMember({
          name: 'textWithIllustration',
          type: 'textWithIllustration',
        }),
        defineArrayMember({
          name: 'gallery',
          type: 'gallery',
        }),
        defineArrayMember({
          name: 'form',
          type: 'form',
        }),
        defineArrayMember({
          name: 'video',
          type: 'video',
        }),
      ],
    }),
  ],
})

