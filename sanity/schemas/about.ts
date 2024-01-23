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
            name: 'profileImg',
            type: 'image',
            title: 'Profile Image'
          },
          {
            name: 'profileIcon',
            type: 'image',
            title: 'Profile Icon'
          },

    ]}