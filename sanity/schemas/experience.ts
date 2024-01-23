export default {
    name: 'experience',
    type: 'document',
    title: 'Experience',
    fields: [{
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        title: 'Years of Experience (Mmm YY - Mmm YY)',
        name: 'yoe',
        type: 'string'
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
        name: 'company',
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
        title: 'Display in CV?',
        name: 'cv',
        type: 'boolean'
      }
    ]
  }