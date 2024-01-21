import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "@/components/ui/button"
import { Briefcase, Send } from "lucide-react";

export default function Navbar(){
    return (
        <div className="grid place-items-center">
            <div className="fixed bottom-8 top-auto z-40 h-fit w-fit rounded-lg border border-border bg-opacity-50 shadow-lg md:bottom-auto md:top-8">
                <div className="flex items-center justify-around gap-4 bg-secondary p-2 text-xl backdrop-blur-sm">
                    
                    <Button asChild variant="ghost" size="icon">
                        <Link href={"/"}><Image src="/logo.svg" width={20} height={40} alt="logo" className="grayscale-0 dark:grayscale-0" priority/></Link>
                    </Button>
                    <Button asChild variant="outline" size="icon">
                        <Link href={"/projects"}><Briefcase className="h-[1.2rem] w-[1.2rem] text-accent-foreground" /></Link>
                    </Button>
                    <Button asChild variant="outline" size="icon">
                        <Link href={"/cv"}><Send className="h-[1.2rem] w-[1.2rem] text-accent-foreground" /></Link>
                    </Button>
                    <ModeToggle/>
                </div>
            </div>
        </div>
    )
}
