import {defineField, defineType} from 'sanity'

export const weightliftingScheduleType = defineType({
  name: 'weightliftingSchedule',
  type: 'document',
  title: 'Weightlifting Schedule',
  fields: [
    defineField({
      name: 'day',
      type: 'string',
      title: 'Day',
    }),
    defineField({
      name: 'sessionStart',
      type: 'string',
      title: 'Session Start',
    }),
    defineField({
      name: 'sessionEnd',
      type: 'string',
      title: 'Session End',
    }),
  ],
})