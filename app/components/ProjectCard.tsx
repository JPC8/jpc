import { simpleProject } from "../lib/interface";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRightFromSquare, File } from "lucide-react";
import { urlFor } from "../lib/sanity";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function ProjectCard(project:simpleProject) {
    return(
        <TooltipProvider>
            <div  className="basis-full p-3 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Card className="rounded-lg bg-secondary p-1 shadow hover:shadow-sm" >
                    {/* image */}
                    <div className="relative grid h-40 place-items-center overflow-hidden rounded-lg bg-background from-primary to-primary/50 hover:bg-gradient-to-r">
                        <Image src={urlFor(project.proImg).url()} alt={project.slug+" image"} width={720} height={720} className="z-20 mt-12 h-full w-11/12 rounded-3xl bg-blue-400" />
                    </div>

                    {/* Stacks */}
                    <div className="relative z-30 h-fit">
                        <div className="align-center absolute -top-5 flex h-fit w-fit items-center justify-center gap-2 rounded-lg bg-secondary p-2 text-3xl shadow">
                            {project.tags.map((tag, idx) =>(
                            <Tooltip key={idx}>
                                <TooltipTrigger>
                                    <Image src={urlFor(tag.tagImg).url()} alt={tag.title+" image"} width={24} height={24} className="rounded-md"/>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{tag.title}</p>
                                </TooltipContent>
                            </Tooltip>
                            ))}
                            <div className="grid h-[24px] w-[24px] rounded-md bg-muted text-xs font-semibold text-muted-foreground">
                                <p className="place-self-center text-sm font-bold">+{project.tagCount}</p>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <CardContent className="mt-5 px-4 py-2">
                        <div className="mb-2 flex content-center justify-between">
                            <h3 className="text-xl font-bold uppercase">{project.title}</h3>
                            <h4 className="text-right font-medium text-muted-foreground">{project.proDate}</h4>
                        </div>
                        <p className="line-clamp-4 text-base font-normal">{project.description}</p>

                        <div className="mt-4 grid grid-cols-2 gap-2 text-base">
                            <Button asChild variant="ghost" className="bg-primary/5 p-2 hover:bg-primary/20">
                                <Link href={`/projects/${project.slug}`}><File size={16} className="mr-2"/> View More</Link>
                            </Button>
                            <Button asChild variant="ghost"  className="bg-primary/5 p-2 hover:bg-primary/20">
                                <Link href={project.link.url} rel="noopener noreferrer" target="_blank"><ArrowUpRightFromSquare className="mr-2" size={16}/> {project.link.title}</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
    </TooltipProvider>
    );
}