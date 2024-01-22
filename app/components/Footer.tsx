export default function Footer() {
    return (
      <div className="grid h-fit place-items-center">
        <div className="z-10 w-11/12 max-w-screen-2xl">
          <div className="flex h-20 w-full flex-wrap items-center justify-around gap-4 rounded-t-xl bg-primary p-4 text-base">
            <div className="text-md font-mono font-bold">JoshCyril@2024</div>
            <div className="text-lg font-semibold">Bold Creativity in Every Pixel.</div>
            <div className="font-regular text-sm font-semibold">Updated: <span className="font-normal">2 days ago</span> </div>
          </div>
          <div className="h-44 w-full bg-primary sm:h-44 md:h-0"></div>
        </div>
      </div>
    );
  }