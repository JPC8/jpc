export default {
    name: 'tag',
	type: 'document',
    title: 'Tag',
    fields: [
    {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
    {
        title: 'Tag Image',
        name: 'tagImg',
        type: 'image'
    },
    {
        title: 'Is this a Language?',
        name: 'lang',
        type: 'boolean'
      }
    ]
}