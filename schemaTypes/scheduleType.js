import {defineField, defineType} from 'sanity'

export const scheduleType = defineType({
  name: 'schedule',
  type: 'document',
  title: 'Schedule',
  fields: [
    defineField({
      name: 'crossfitSchedule',
      type: 'crossfitSchedule',
    }),
    defineField({
      name: 'weightliftingSchedule',
      type: 'weightliftingSchedule',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Schedule',
      };
    },
  },
})