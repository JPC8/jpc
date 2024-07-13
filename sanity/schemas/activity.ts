export default {
  name: 'activity',
  type: 'document',
  title: 'Activity',
  fields: [{
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'actImg',
      type: 'image',
      title: 'Activity Image'
    },
    {
      name: 'tags',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{
          type: 'tag'
        }]
      }]
    },
    {
      title: 'Activity Date',
      name: 'actDate',
      type: 'datetime'
    },
  ]
}