export default function Main() {
    return (
    <div className="grid h-[80vh] place-items-center">
        <div className="z-10 grid w-11/12 max-w-screen-2xl grid-cols-1 gap-6 px-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="relative col-span-4 flex w-full items-center py-2">
                <div className="absolute -ml-[13px] h-full w-1 rounded-3xl bg-primary"></div>
                <div className="text-4xl font-medium md:text-5xl lg:text-6xl">
                    <div className="flex">Hello,</div>
                    <div className="pt-4">I’m <span className="text-4xl font-bold text-primary md:text-5xl lg:text-6xl">Joshua Cyril</span></div>
                </div>
            </div>
            <div className="relative col-span-4 flex w-full items-center py-1">
                <div className="absolute -ml-[13px] h-full w-1 rounded-3xl bg-primary"></div>
                <span className="text-xl font-medium md:text-2xl">Student, Web Developer</span>
            </div>
            <div className="relative col-span-4 flex w-full items-center py-1">
                <div className="absolute -ml-[13px] h-full w-1 rounded-3xl bg-primary"></div>
                <span className="pr-2 text-xl font-medium">UTC</span>
                <span className="font-regular text-xl">04:10</span>
            </div>
            <div className="absolute top-10 col-span-4 flex items-center">
                <div className="absolute -ml-[13px] h-full w-1 rounded-3xl bg-primary"></div>
                <span className="text-md pr-2 font-medium">last visit:</span>
                <span className="text-md font-regular">London, UK </span>
            </div>
        </div>
    </div>
    );
  }