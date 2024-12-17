"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";
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
const Nav=()=>{
    const pathName=usePathname()
console.log(pathName)
    return(
    <nav className="flex gap-8">{
        links.map((el,index)=>{
            return <Link href={el.path} key={index} className={
                `${el.path==pathName && "text-accent-default border-b-2 border-accent-default"} capitalize font-medium hover:text-accent-hover transition-all`}>
                     {el.name}
                   </Link>
        })
        }</nav>
    )
}
export default Nav