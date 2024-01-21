export default {
	name: 'project',
	type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
		{
      name: 'slug',
      type: 'slug',
      title: 'Slug',
			options:{
				source:'title'
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
      name: 'content',
      type: 'array',
      title: 'Content',
			of:[
				{
					type:'block'
				}
			]
    },
  ]
}