export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [{
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title'
      }
    },
    {
      name: 'proImg',
      type: 'image',
      title: 'Project Image'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'summary',
      type: 'array',
      title: 'Summary',
      of: [{
        type: 'block'
      }]
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{
        type: 'block'
      }]
    },
    {
      name: 'links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [{
            name: 'title',
            type: 'string',
            title: 'Title'
          },
          {
            name: 'description',
            type: 'string',
            title: 'Description'
          },
          {
            name: 'url',
            type: 'url',
            title: 'Link'
          },
        ]
      }]
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
      title: 'Project Date',
      name: 'proDate',
      type: 'datetime'
    },
    {
      name: 'gallery',
      type: 'array',
      of: [{
        type: 'image'
      }],
      options: {
        layout: 'grid'
      }
    },
    {
      title: 'Is this a featured project?',
      name: 'featured',
      type: 'boolean'
    }
  ]
}