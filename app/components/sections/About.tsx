import { aboutNContact } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
export const revalidate = 30 // revalidate at most 30 sec

import GraphSection from "./GraphSection";

const datum = {
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'My Second Dataset',
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };


  
async function getData(){
    const query = `
    {
    "about": *[_type == "about"]{ content },
    "contact": *[_type == "contact"]{
        title,
        name,
        url,
        Icon,
        }
    }
    `;

    const data = await client.fetch(query);
    return data;
}

export default async function About(){
    const data:aboutNContact = await getData();
    return(
    <div className="mb-8 grid h-fit place-items-center py-6">

        <div className="z-10 w-11/12 max-w-screen-2xl">

            <div className="relative col-span-2 mb-4 ml-3 flex basis-full items-center py-2">
                <div className="absolute -ml-[13px] h-full w-1 rounded-3xl bg-primary"></div>
                <span className="flex text-2xl font-bold md:text-3xl">About me</span>
            </div>

            <div className="flex flex-wrap justify-between py-3">
                <div className="mb-2 basis-full p-3 sm:basis-full md:basis-full lg:basis-1/2">
                    <div className="relative h-fit rounded-lg bg-secondary p-6 font-normal shadow-sm">

                        <div className="prose prose-lg prose-blue max-w-none dark:prose-invert prose-a:text-primary prose-li:marker:text-primary">
                            <PortableText value={data.about[0].content} />
                        </div>

                        {/* Skills */}
                        <div className="-mt-2 flex flex-wrap">
                            <div className="skills m-1 flex items-center rounded-md border border-primary/70 px-2 py-0.5 text-xs capitalize leading-5">
                                <span className="iconify mr-1 inline-flex text-sm" data-icon="solar:file-bold-duotone"></span> Laravel
                            </div>
                        </div>

                        </div>
                    </div>
            

            {/* Links */}
            <div className="relative mb-2 mt-44 basis-full p-3 sm:mt-44 sm:basis-full md:mt-44 md:basis-full lg:mt-0 lg:basis-1/2">

                <div className="absolute -top-[5.5rem] -ml-0.5 flex basis-full items-center py-2">
                    <div className="absolute -ml-[13px] h-full w-1 rounded-3xl bg-primary"></div>
                    <span className="flex text-2xl font-bold md:text-3xl">Contact</span>
                </div>
                
                <div className="flex flex-wrap justify-between py-3">
                    {/* {data.contact.map((dt, idx)=>(
                        <div key={idx} className="mb-5 basis-full px-3 sm:basis-1/2 md:basis-1/3 lg:basis-1/2">
                            <div className="relative h-fit rounded-lg bg-secondary shadow-sm hover:shadow">
                                <Button asChild variant={"ghost"}>
                                    <Link href={dt.url} rel="noopener noreferrer" target="_blank">
                                        <Image src={urlFor(dt.Icon).url()} alt={dt.title+" image"} width={30} height={30} className="dark:invert"/>
                                        <div className="ml-3 flex items-center p-2">
                                            <div className="font-bold">
                                                {dt.title}
                                                <span className="ml-2 font-normal text-muted-foreground">{dt.name}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    ))} */}
                    
                    <div className="relative h-full basis-full rounded-lg bg-secondary shadow-sm">
                        <GraphSection datum={datum} />
                    </div>

                </div>

                </div>

            </div>
        </div>
    </div>
    );
}