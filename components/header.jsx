import Link from "next/link";
import { Button } from "./ui/button";
import { Span } from "next/dist/trace";
import Nav from "./Nav";
import MobilNave from "./MobilNave";
import Image from "next/image";
import Hero from "./Hero";

const Header=()=>{
     return(
        <header className=" text-white ">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    {/* <h1 className="text-4xl font-semibold"> */}
                    <Image src="/assets/Logo_Souf_RCode.png" alt="Logo"
            width={120} 
            height={40}/>
                    {/* <span className="text-accent-default">{"</>"}</span> */}
                    {/* </h1> */}
                </Link>
                <div className="hidden xl:flex item-center gap-8">
                <Nav/>
                <Link href="/contact">
                <Button className="text-primary">hire me</Button>
                </Link>
                </div>
                <div className="xl:hidden"><MobilNave/></div>
            </div>
          
        </header>
      
    )
}
export default  Header
   