"use client"
import {BsArrowDownRight}from "react-icons/bs";
import { animate, motion } from "framer-motion"

import Link from "next/link"
import { delay, MotionConfig } from "framer-motion"
const services=[
    {
        num:1,
        title:"web development",
        description:"I create responsive, modern websites tailored to your needs, ensuring great performance and usability.",
        href:""
    },
    {
        num:2,
        title:"Problem Solving",
        description:"I fix bugs, enhance performance, and optimize your code to keep your projects running smoothly.",
         href:""
    },
    {
        num:3,
        title:"SEO Optimization",
        description:"I boost your website’s visibility on search engines with effective SEO strategies and faster load times.",
         href:""
    },
    {
        num:4,
        title:"Consulting & Training",
        description:"I provide expert guidance and training to help you or your team excel in web development.",
         href:""
    },
]
const Services=()=>{
    return(
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-20">
             <div className="flex justify-center items-center my-8 pb-12">
                 <h2 className="text-4xl font-bold  text-outline text-accent-default transition-transform duration-500 ease-in-out hover:rotate-360 hover:text-accent-hover">
                 Services I Provide
                 </h2>
            </div>
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
                                    <p className="text-white/60 capitalize">{el.description}</p>
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