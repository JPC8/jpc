import Image from "next/image";
import Link from "next/link";
export default function Navbar(){
    return (
        <div className="grid-container">
            <div className="fixed bottom-8 top-auto z-40 h-fit w-fit rounded-lg border border-white bg-slate-50 bg-opacity-50 shadow-lg backdrop-blur-sm md:bottom-auto md:top-8">
                <div className="flex justify-around p-2 text-xl">
                    <Link href="/" className="logo hover:bg-primary/20 mx-2 rounded-md p-3"><Image src="/logo.svg" width={20} height={40} alt="logo" className="grayscale-0 dark:grayscale" priority/></Link>
                    <Link href="/" className="projects hover:bg-primary/20 mx-2 rounded-md p-3">X</Link>
                    <Link href="/" className="contact hover:bg-primary/20 mx-2 rounded-md p-3 text-2xl">Y</Link>
                    <Link href="/" className="mode hover:bg-primary/20 mx-2 rounded-md p-3">Z</Link>
                </div>
            </div>
        </div>
    )
}