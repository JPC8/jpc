import { CheckSquare } from "lucide-react";

export default function Main() {
    return (
    <div className="mb-10 grid h-fit place-items-center py-6">

        <div className="z-10 w-11/12 max-w-screen-2xl">

            <div className="relative col-span-4 mb-4 ml-3 flex w-full basis-full items-center py-2">
                <div className="absolute -ml-[13px] h-full w-1 rounded-3xl bg-primary"></div>
                <span className="flex text-2xl font-bold md:text-3xl">Recent activities</span>
            </div>

            <div className="div flex flex-wrap py-3">

                <div className="mb-2 basis-full p-3 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="relative h-fit rounded-lg bg-white p-1 shadow hover:shadow-xl">
                        <div className="grid grid-cols-4">
                            <div className="from-Seton to-dagger/50 relative col-span-1 grid h-20 w-full place-items-center overflow-hidden rounded-lg transition-all delay-150 ease-in-out hover:bg-gradient-to-t">
                                <div className="rounded-tr-1xl z-20 ml-5 h-full w-full rounded-xl bg-blue-400 bg-cover bg-center" ></div>
                            </div>
                            <div className="col-span-3 p-2">
                                <div className="BigProjectSTitle text-xl font-semibold">Big Project’s Title</div>
                                <div className="grid grid-cols-2 pt-2">
                                    <div className="flex items-center text-sm">
                                        <CheckSquare /> Completed
                                    </div>
                                    <div className="text-right text-sm font-medium">2 hours ago</div>
                                </div>


                            </div>
                        </div>



                    </div>
                </div>

            </div>

        </div>

    </div>
    );}