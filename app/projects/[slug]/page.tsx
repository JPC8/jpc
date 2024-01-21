/* eslint-disable @next/next/no-async-client-component */
// "use client"

import { fullProject, tags } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 30 // revalidate at most 30 sec

async function getData(slug:string){
    const query = `
    *[_type == "project" && slug.current == '${slug}']{
        "slug": slug.current,    
        title,
        proImg,
        content
      }[0]
    `;

    const data = await client.fetch(query);
    return data;
}

async function getDataTag(){
    const query = `
    *[_type == "tag"]{
        title,
        imageUrl
    }
    `;

    const data = await client.fetch(query);
    return data;
}

export default async function ProjectRoute({params}:{params:{slug:string}}){
    const data:fullProject = await getData(params.slug);
    const taggable:tags[] = await getDataTag();
    return(
        <div className="mt-10 grid h-fit place-items-center md:mt-28">
            <div className="z-10 w-11/12 max-w-screen-2xl">

                <div className="relative col-span-4 mb-4 ml-3 flex w-full basis-full items-center py-2">
                    <div className="absolute -ml-[13px] h-full w-1 rounded-3xl bg-primary"></div>
                    <h1 className="flex text-2xl font-bold md:text-3xl">{data.title}</h1>
                </div>

                <div className="div flex flex-wrap justify-center py-3">
                    <div className="h-fit w-11/12 rounded-xl border bg-cover bg-center">
                    {/* urlFor(data.proImg).url() */}
                        <Image src={""} alt={data.slug+" image"} width={1080} height={360} className="w-full rounded-xl bg-blue-400 bg-cover bg-center" priority />
                    </div>

                    { taggable.map((tg, idx) =>(
                        <div key ={idx} className="">
                            <p  className="">{tg.title}</p>
                            <Image src={tg.imageUrl} alt={tg.title+" logo"} width={10} height={10}/>
                        </div>
                    )) }

                    <div className="prose prose-lg prose-blue mt-16 dark:prose-invert prose-a:text-primary prose-li:marker:text-primary">
                        <PortableText value={data.content} />
                    </div>




                </div>
                
            </div>
        </div>
        
    )
}