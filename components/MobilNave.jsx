"use client";
import { Sheet,SheetContent,SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci";
import Image from "next/image";

const links=[
    {
        name:"home",
        path:"/"
    },
    {
        name:"services",
        path:"/services"
    },
    {
        name:"resume",
        path:"/resume"
    },
    {
        name:"work",
        path:"/works"
    },
    {
        name:"contact",
        path:"/contact"
    }
]
const MobilNave=()=>{
    const pathname=usePathname();
    return(<>
    <Sheet>
        <SheetTrigger className="flex justify-center items-center"  >
            <CiMenuFries className="text-[32] text-accent-default"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className="mt-3 mb-4 text-center text-2xl">
            <Link href="/">
                    {/* <h1 className="text-4xl font-semibold">
                    soufRCode<span className="text-accent-default">.</span>
                    </h1> */}
                    <Image src="/assets/Logo_Souf_RCode.png" alt="Logo"  
            width={120} 
            height={40}/>
                </Link>
            </div>
            <nav className="flex flex-col justify-center items-center gap-5">
                {links.map((link,index)=>{
                    return(<>
                    <Link href={link.path}key={index} className={`${link.path==pathname&&"text-accent-default border-accent-default border-b-2"}
                        text-xl capitalize hover:text-accent-default transition-all`}>{link.name}</Link>
                    </>)
                })}
            </nav>
        </SheetContent>
    </Sheet>
    </>)
}
export default MobilNave;