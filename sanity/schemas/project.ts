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
      name: 'cvContent',
      type: 'array',
      title: 'CV Content',
      of: [{
        type: 'block'
      }]
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
      title: 'Project Duration (Mmm YY - Mmm YY)',
      name: 'proDate',
      type: 'string'
    },
    {
      title: 'Project Date',
      name: 'pDate',
      type: 'date'
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
    },
    {
      title: 'Is this a CV project?',
      name: 'cv',
      type: 'boolean'
    }
  ]
}