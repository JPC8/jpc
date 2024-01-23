export default {
  name: 'contact',
  type: 'document',
  title: 'Contact',
  fields: [{
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'name',
      type: 'string',
      title: '@ Name'
    },
    {
      name: 'url',
      type: 'url',
      title: 'Link URL',
      validation: (Rule: { uri: (arg0: { scheme: string[]; }) => any; }) => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      })
    },
    {
      name: 'Icon',
      type: 'image',
      title: 'Link Icon'
    },
  ]
}