import Link from "next/link";
import { client, urlFor } from "../lib/sanity";
import { simpleProject } from "../lib/interface";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRightFromSquare, FileCode2 } from "lucide-react";


export const revalidate = 30 // revalidate at most 30 sec

async function getData(){
    const query = `
    *[_type == "project"] | order(_createdAt desc){
        title,
        description,
        "slug": slug.current,
        proImg
      }
    `;

    const data = await client.fetch(query);
    return data;
}

export default async function projects(){
    const data:simpleProject[] = await getData();

    return (
        <div className="mb-10 grid h-fit place-items-center py-6">

        <div className="z-10 w-11/12 max-w-screen-2xl">

            <div className="relative col-span-4 mb-4 ml-3 flex w-full basis-full items-center py-2">
                <div className="absolute -ml-[13px] h-full w-1 rounded-3xl bg-primary"></div>
                <span className="flex text-2xl font-bold md:text-3xl">Check out my <Link href="/projects" className="ml-2 hover:underline">Projects</Link></span>
            </div>

            <div className="div flex flex-wrap py-3">
                {data.map((project, idx) =>(
                    <div key={idx} className="basis-full p-3 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                        <Card className="h-fit rounded-lg bg-secondary p-1 shadow hover:shadow-sm" >
                            {/* image */}
                            <div className="relative grid h-40 place-items-center overflow-hidden rounded-lg bg-background from-primary to-primary/50 hover:bg-gradient-to-r">
                                <Image src={urlFor(project.proImg).url()} alt={project.slug+" image"} width={100} height={100} className="rounded-tr-1xl z-20 mt-12 h-full w-11/12 rounded-3xl bg-blue-400 bg-cover bg-center" />
                            </div>

                            {/* Stacks */}
                            <div className="relative z-30 h-fit">
                                <div className="align-center absolute -top-5 left-2 flex h-fit w-fit justify-center rounded-lg bg-accent p-2 text-3xl shadow-sm">
                                    <p className="text-center font-mono text-xs text-accent-foreground">Docker | Laravel | PHP</p>
                                </div>
                            </div>

                            {/* Content */}
                            <CardContent className="mt-5 px-4 py-2">
                                <div className="mb-2 grid grid-cols-5">
                                    <h3 className="col-span-4 text-xl font-bold uppercase">{project.title}</h3>
                                    <h4 className="col-span-1 mt-1 text-right font-medium">2023</h4>
                                </div>
                                <p className="line-clamp-3 text-base font-normal">{project.description}</p>

                                <div className="mt-4 grid grid-cols-2 gap-2 text-base">
                                    <Button asChild variant="ghost" className="bg-primary/5 p-2 hover:bg-primary/20">
                                        <Link href={`/projects/${project.slug}`}><ArrowUpRightFromSquare size={16} className="mr-2"/> View More</Link>
                                    </Button>
                                    <Button asChild variant="ghost"  className="bg-primary/5 p-2 hover:bg-primary/20">
                                        <Link href={project.slug}><FileCode2 className="mr-2" size={16}/> Code </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}