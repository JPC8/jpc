export default {
  name: 'education',
  type: 'document',
  title: 'Education',
  fields: [{
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'uni',
      type: 'object',
      fields: [{
          name: 'name',
          type: 'string',
          title: 'Name'
        },
        {
          name: 'location',
          type: 'string',
          title: 'Location'
        },
        {
          name: 'url',
          type: 'url',
          title: 'Link'
        },
        {
          name: 'Img',
          type: 'image',
          title: 'Image'
        },
      ]

    },
    {
      name: 'cvContent',
      type: 'array',
      title: 'CV Content',
      of: [{
        type: 'block'
      }]
    },
    {
      title: 'Display in CV?',
      name: 'cv',
      type: 'boolean'
    }
  ]
}