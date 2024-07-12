export interface simpleProject {
  title: string;
  proImg: any;
  link: {
    title: string;
    url: string;
  };
  slug: string;
  description: string;
  proDate: string,
    tags: [{
      title: string,
      tagImg: any
    }],
    tagCount: number;
}

export interface fullProject {
  title: string;
  proImg: any;
  summary: any;
  content: any;
  proDate: string;
  links: [{
    title: string,
    description: string,
    url: string,
  }];
  slug: string;
  description: string;
  gallery: [{
    asset: any
  }];
  tags: [{
    title: string,
    tagImg: any
  }],
}

export interface tags {
  title: string;
  imageUrl: string;
}

export interface about {
  tagline: string;
}

export interface aboutNTag {
  about:[{
    content: any;
  }],
  tags:[
    {
      tag_name: string,
      tag_count: number,
      tag_url: any;
    }
  ]
  
  
}