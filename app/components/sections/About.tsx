import Image from "next/image";

export default function About(){
    return(
    <div className="mb-8 grid h-fit place-items-center py-6">

        <div className="z-10 w-11/12 max-w-screen-2xl">

            <div className="relative col-span-2 mb-4 ml-3 flex basis-full items-center py-2">
                <div className="absolute -ml-[13px] h-full w-1 rounded-3xl bg-primary"></div>
                <span className="flex text-2xl font-bold md:text-3xl">About me</span>
            </div>

            <div className="div flex flex-wrap justify-between py-3">
                <div className="mb-2 basis-full p-3 sm:basis-full md:basis-full lg:basis-1/2">
                    <div className="relative h-fit rounded-lg bg-secondary p-4 text-lg font-normal shadow hover:shadow-xl">
                        <p className="text-md p-3 sm:text-lg">
                            I am a student at
                            <span className="inline-flex items-baseline">
                                <Image src="/uni_logo1.jpg" alt="uni" width={8} height={5} className="mx-1 h-5 w-8 self-center rounded-full" />
                                <span>Swansea</span>
                            </span>
                            University and I like developing web applications. I have a passion for building things that live on the internet.
                        </p>

                        <div className="flex flex-wrap">

                            <div className="basis-full sm:basis-full md:basis-1/4 lg:basis-1/4">
                                <div className="flex flex-col items-center justify-center gap-4 py-4">
                                    <div className="rounded-tr-1xl z-20 row-span-1 h-60 w-full rounded-xl bg-blue-400 bg-cover bg-center sm:h-52" ></div>
                                    <button className="w-full rounded-full p-2 text-sm hover:bg-primary/20 sm:p-2 sm:text-lg md:p-1">
                                        <span className="iconify mx-1 inline-flex" data-icon="solar:file-bold-duotone"></span>
                                        View CV
                                    </button>
                                </div>
                            </div>

                            <div className="basis-full sm:basis-full md:basis-3/4 lg:basis-3/4">
                                <div className="p-4">
                                    <p className="text-md sm:text-lg">
                                        I am ambitious and passionate. It keeps me motivated to set goals for myself and to take on challenges. To me, it is vital to strive for new heights and to provide the best possible service to my clients.
                                    </p>
                                    
                                    {/* Skills */}
                                    <div className="-mt-2 flex flex-wrap">
                                        <div className="skills border-dagger/70 m-1 flex items-center rounded-md border px-2 py-0.5 text-xs capitalize leading-5">
                                            <span className="iconify mr-1 inline-flex text-sm" data-icon="solar:file-bold-duotone"></span> Laravel
                                        </div>
                                        <div className="skills border-dagger/70 m-1 flex items-center rounded-md border px-2 py-0.5 text-xs capitalize leading-5">
                                            <span className="iconify mr-1 inline-flex text-sm" data-icon="solar:file-bold-duotone"></span> PHP
                                        </div>
                                        <div className="skills border-dagger/70 m-1 flex items-center rounded-md border px-2 py-0.5 text-xs capitalize leading-5">
                                            <span className="iconify mr-1 inline-flex text-sm" data-icon="solar:file-bold-duotone"></span> Docker
                                        </div>
                                        <div className="skills border-dagger/70 m-1 flex items-center rounded-md border px-2 py-0.5 text-xs capitalize leading-5">
                                            <span className="iconify mr-1 inline-flex text-sm" data-icon="solar:file-bold-duotone"></span> Figma
                                        </div>
                                        <div className="skills border-dagger/70 m-1 flex items-center rounded-md border px-2 py-0.5 text-xs capitalize leading-5">
                                            <span className="iconify mr-1 inline-flex text-sm" data-icon="solar:file-bold-duotone"></span> Sail
                                        </div>
                                        <div className="skills border-dagger/70 m-1 flex items-center rounded-md border px-2 py-0.5 text-xs capitalize leading-5">
                                            <span className="iconify mr-1 inline-flex text-sm" data-icon="solar:file-bold-duotone"></span> idk very long text
                                        </div>
                                    </div>
                                </div>
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

                    <div className="div flex flex-wrap">

                        <div className="mb-5 basis-full px-3 sm:basis-1/2 md:basis-1/3 lg:basis-1/2">
                            <div className="relative h-fit rounded-lg bg-secondary p-1 shadow hover:shadow-xl">
                                <button className="flex">
                                    <div className="from-Seton to-dagger/50 relative grid h-12 w-12 place-items-center rounded-lg transition-all delay-150 ease-in-out hover:bg-gradient-to-t">
                                        <span className="iconify text-xl" data-icon="ph:github-logo-duotone"></span>
                                    </div>
                                    <div className="ml-3 flex items-center p-2">
                                        <div className="BigProjectSTitle font-regular">GitHub
                                            <span className="">@joshcyril</span>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="mb-5 basis-full px-3 sm:basis-1/2 md:basis-1/3 lg:basis-1/2">
                            <div className="relative h-fit rounded-lg bg-secondary p-1 shadow hover:shadow-xl">
                                <button className="flex">
                                    <div className="from-Seton to-dagger/50 relative grid h-12 w-12 place-items-center rounded-lg transition-all delay-150 ease-in-out hover:bg-gradient-to-t">
                                        <span className="iconify text-xl" data-icon="ph:github-logo-duotone"></span>
                                    </div>
                                    <div className="ml-3 flex items-center p-2">
                                        <div className="BigProjectSTitle font-regular">GitHub
                                            <span className="">@joshcyril</span>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="mb-5 basis-full px-3 sm:basis-1/2 md:basis-1/3 lg:basis-1/2">
                            <div className="relative h-fit rounded-lg bg-secondary p-1 shadow hover:shadow-xl">
                                <button className="flex">
                                    <div className="from-Seton to-dagger/50 relative grid h-12 w-12 place-items-center rounded-lg transition-all delay-150 ease-in-out hover:bg-gradient-to-t">
                                        <span className="iconify text-xl" data-icon="ph:github-logo-duotone"></span>
                                    </div>
                                    <div className="ml-3 flex items-center p-2">
                                        <div className="BigProjectSTitle font-regular">GitHub
                                            <span className="">@joshcyril</span>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="mb-5 basis-full px-3 sm:basis-1/2 md:basis-1/3 lg:basis-1/2">
                            <div className="relative h-fit rounded-lg bg-secondary p-1 shadow hover:shadow-xl">
                                <button className="flex">
                                    <div className="from-Seton to-dagger/50 relative grid h-12 w-12 place-items-center rounded-lg transition-all delay-150 ease-in-out hover:bg-gradient-to-t">
                                        <span className="iconify text-xl" data-icon="ph:github-logo-duotone"></span>
                                    </div>
                                    <div className="ml-3 flex items-center p-2">
                                        <div className="BigProjectSTitle font-regular">GitHub
                                            <span className="">@joshcyril</span>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    </div>
    );
}