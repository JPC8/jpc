import { Copyright } from "lucide-react";
export default function Footer() {
    return (
      <div className="relative grid h-fit place-items-center">
        <div className="z-10 w-11/12 max-w-screen-2xl">
          <div className="flex h-20 w-full flex-wrap items-center justify-around gap-4 rounded-t-xl bg-primary p-4 text-base text-white md:flex-col">
            <div className="font-regular flex items-center gap-1 text-sm font-bold tracking-wide"><Copyright size={16}/>2024</div>

            <div className="font-regular text-sm font-semibold">Updated: <span className="font-normal">2 days ago</span> </div>
          </div>
          <div className="h-24 w-full bg-primary sm:h-24 md:h-0"></div>
        </div>
      </div>
    );
  }