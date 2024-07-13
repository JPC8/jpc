export default {
    name: 'about',
    type: 'document',
    title: 'About',
    fields: [
        {
            name: 'tagline',
            type: 'string',
            title: 'Tag Line'
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
            name: 'pdfFile',
            type: 'file',  
            options: {
              accept: 'application/pdf'
            }
          },
          {
            name: 'copyright',
            type: 'string',
            title: 'Copyright Date'
          },
          {
            name: 'udDate',
            type: 'datetime',
            title: 'Updated Date'
          }
    ]
  }