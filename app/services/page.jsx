"use client"
import {BsArrowDownRight}from "react-icons/bs";
import { animate, motion } from "framer-motion"

import Link from "next/link"
import { delay, MotionConfig } from "framer-motion"
const services=[
    {
        num:1,
        title:"web development",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam dolor alias labore",
        href:""
    },
    {
        num:2,
        title:"UI/UX  Design",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam dolor alias labore",
         href:""
    },
    {
        num:3,
        title:"logo design",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam dolor alias labore",
         href:""
    },
    {
        num:4,
        title:"SEO",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam dolor alias labore",
         href:""
    },
]
const Services=()=>{
    return(
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{opacity:0}} animate={{
                        opacity:1,
                        transition:{delay:2.4,duration:0.4,ease:"easeIn"}
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[68px]"
                    >
                        {services.map((el,index)=>{
                            return(
                                <div key={index} className="flex flex-1 flex-col justify-center gap-6 group">
                                    <div className="flex w-full justify-between items-center">
                                        <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover
                                        transition-all duration-500
                                        ">{el.num}</div>
                                        <Link href={el.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent-default
                                        transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                        <BsArrowDownRight className="text-primary text-3xl"/>
                                        </Link>
                                    </div>
                                    <h2 className="text-[] capitalize">{el.title}</h2>
                                    <p className="text-white/60">{el.description}</p>
                                    <div className="border-b border-white/28 w-full"></div>
                                </div>
                            )
                        })}
                </motion.div>
            </div>
        </section>
    )
}
export default Services