"use client"
import { motion } from "framer-motion";
import React,{useState} from "react";
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css";
import{BsArrowUpRight,BsGithub,BsWordpress}from"react-icons/bs";
import { Tooltip,TooltipContent,TooltipTrigger,TooltipProvider} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/workSliderBtn";
import { SiCss3, SiLaravel, SiMysql, SiTailwindcss,SiJquery,SiBootstrap } from "react-icons/si";
const projects=[
     {
        num:"01",
        category:"Laravel",
        title:"animarok -  E-commerce Website for Moroccan Handicrafts",
        description:"Animarok is a dynamic e-commerce platform built with Laravel, tailored to showcase and sell Moroccan handcrafted products. It offers a smooth and responsive user interface, product browsing with filters, secure order submission, and admin-side order management. The system also features a user-friendly checkout experience and integration with WhatsApp for quick customer communication.",
        stack:[{name:"Laravel",icon:<SiLaravel/>},{name:"Mysql",icon:<SiMysql/>}, { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "jQuery", icon: <SiJquery /> }],
        image:"/assets/work/animarok.png",
        live:"https://www.animarok.com/",
        githup:"https://github.com/SoufianeRefaiCoding/animarok"
    }
    ,{
        num:"02",
        category:"CMS",
        title:"Go & Study - Educational Consultancy Website",
        description:"Go & Study is a WordPress-based website designed for an international education consultancy. It offers a personalized approach to guiding students in planning their study-abroad journey. With an intuitive interface, it collects user preferences through simple questions and delivers tailored advice and resources, opening doors to global educational opportunities.",
        stack:[{name:"Wordpress",icon:<BsWordpress/>}],
        image:"/assets/work/goAndstudy.png",
        live:"https://goandstudy.ma",
        githup:""
    },
    {
        num:"03",
        category:"Laravel",
        title:"Gym Management System",
        description:"This project is a web application designed to manage gym operations efficiently. Built with the Laravel framework, it allows for the management of training sessions, coaches, and gym branches across different cities. Key features include user registration, session scheduling, coach assignments, and city-specific branch management. The system aims to simplify administrative tasks and improve the overall gym experience for both staff and members.",
        stack:[{name:"Laravel",icon:<SiLaravel/>},{name:"Mysql",icon:<SiMysql/>},{name:"Css",icon:<SiCss3/>}],
        image:"/assets/work/gym.png",
        live:"",
        githup:"https://github.com/SoufianeRefaiCoding/Gym-Management-System"
    },
    {
        num:"04",
        category:"Cms",
        title:"Toufayour - Jewelry Sales Website",
        description:"Toufayour is a WordPress-based eCommerce website specializing in the sale of exquisite jewelry. Designed to captivate customers, the platform combines elegant aesthetics with easy navigation. It features a curated collection of jewelry, secure payment options, and responsive design, offering a seamless shopping experience for every jewelry lover.",
        stack:[{name:"wordpress",icon:<BsWordpress/>}],
        image:"/assets/work/toufayour.png",
        live:"https://toufayour.com/",
        githup:""
    },
    
    {
        num:"05",
        category:"Laravel",
        title:"LuxyCar - Car Rental Management System",
        description:"LuxyCar is a car rental web application developed as a graduation project using the Laravel framework. It allows users to register, explore available cars, and make bookings seamlessly. The admin panel provides full control over car listings, bookings, and user management. Key features include user registration and authentication, car listing and management, booking management, and an intuitive admin panel for efficient oversight. The system is designed to streamline car rental operations and enhance user experience.",
        stack:[{name:"Laravel",icon:<SiLaravel/>},{name:"Mysql",icon:<SiMysql/>},{name:"Tailwindcss",icon:<SiTailwindcss/>}],
        image:"/assets/work/luxyCar.png",
        live:"https://github.com/SoufianeRefaiCoding/luxyCar",
        githup:"https://github.com/SoufianeRefaiCoding/luxyCar"
    },{
        num:"06",
        category:"CMS",
        title:"MessaDeco - WordPress eCommerce Website",
        description:"MessaDeco is a custom WordPress-based eCommerce platform tailored for stylish home decor enthusiasts. This project focused on creating a seamless shopping experience with a modern design, user-friendly navigation, and robust performance. Key features include product categorization, secure payment integration, and responsive design, ensuring accessibility across all devices.",
        stack:[{name:"Wordpress",icon:<BsWordpress/>}],
        image:"/assets/work/messaDeco.png",
        live:"https://messadeco.com/",
        githup:""
    },{
        num:"07",
        category:"Cms",
        title:"Neba Consulting - Study Abroad Guidance",
        description:"Neba Consulting is a WordPress website dedicated to guiding Moroccan and international students in their study-abroad journeys. The platform offers a clear vision of future academic opportunities and employment prospects tailored to individual career paths. Neba Consulting combines expertise and personalized advice to help students achieve their educational and professional aspirations.",
        stack:[{name:"wordpress",icon:<BsWordpress/>}],
        image:"/assets/work/neba.png",
        live:"https://nebaconsulting.ma/",
        githup:""
    },{
        num:"08",
        category:"Cms",
        title:"Zaakzoon - Men's Clothing E-commerce Website",
        description:"Zaakzoon is a stylish WordPress-based eCommerce platform specializing in men's clothing. The website offers a curated collection of high-quality apparel, combining modern design with an intuitive shopping experience. Featuring secure payment options, responsive design, and seamless navigation, Zaakzoon caters to fashion-conscious men seeking effortless online shopping.",
        stack:[{name:"wordpress",icon:<BsWordpress/>}],
        image:"/assets/work/zaakzoon.png",
        live:"https://nebaconsulting.ma/",
        githup:""
    },{
        num:"09",
        category:"Cms",
        title:"Clinova - Clinical Development Support Website",
        description:"Clinova is a WordPress website designed for a clinical development consultancy specializing in diverse therapeutic modalities. From traditional small molecule medications to advanced therapies, the platform highlights the firm's commitment to staying at the forefront of scientific innovation. It provides insights into tailored solutions, ensuring clients receive expert guidance in the evolving landscape of medical development.",
        stack:[{name:"Wordpress",icon:<BsWordpress/>}],
        image:"/assets/work/clinova.png",
        live:"https://clinova.net/",
        githup:""
    },{
        num:"09",
        category:"Cms",
        title:"Le Bon Assureur - Insurance Broker Showcase Website",
        description:"Le Bon Assureur is a professional WordPress showcase website for an experienced insurance brokerage firm. With over 15 years of expertise, the platform highlights tailored insurance solutions for both individuals and businesses. It emphasizes trust, protection, and growth by showcasing services that empower clients to pursue their goals with confidence and peace of mind.",
        stack:[{name:"Wordpress",icon:<BsWordpress/>}],
        image:"/assets/work/le-bonassureur.png",
        live:"https://le-bonassureur.fr/",
        githup:""
    },
    {
        num:"10",
        category:"Cms",
        title:"Verbnb - Short-Term Rental Management Website",
        description:"Verbnb is a WordPress platform dedicated to comprehensive property management for short-term rentals. The site showcases services that handle every aspect of property management, enabling owners to maximize rental income hassle-free. From guest communication to maintenance, Verbnb ensures a seamless and stress-free experience for property owners.",
        stack:[{name:"wordpress",icon:<BsWordpress/>}],
        image:"/assets/work/verbnb.png",
        live:"https://verbnb.com/",
        githup:""
    }
]
const Work=()=>{
    const[project,setProject]=useState(projects[0])
    const handelSlidChenge=(swiper)=>{
        // get currunt indeex slid
        const currentIndexSlid=swiper.activeIndex
        // change project based on currunt index in state
        setProject(projects[currentIndexSlid])
    }
    return(<>
        <div className="flex justify-center items-center my-12 ">
            <h2 className="text-4xl font-bold  text-outline text-accent-default transition-transform duration-500 ease-in-out hover:rotate-360 hover:text-accent-hover">
                Projects That Define Me
            </h2>
        </div>
    <motion.section initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease:"easeIn"}}} 
    className="min-h-[88vh] flex flex-col justify-center py-12 xl:px-0">

    <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">   
                <div className="flex flex-col gap-[30px] h-[50%]">
                    <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                    {project?.num}
                    </div>
                    <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-default transition-all duration-500 capitalize">
                        {project?.title} 
                    </h2>
                    <span className="text-[22px] leading-none text-white group-hover:text-accent-default transition-all duration-500 capitalize">
                        {project?.category} Project
                    </span>
                    <p className=" text-white/60">{project?.description}</p>
                    <ul className="flex gap-4">
                        {project?.stack.map((el,index)=>{
                            return <li key={index} className="text-xl text-accent-default flex flex-row">{el.name}{el.icon}
                            {index !== project?.stack.length -1 && ","}
                            </li>
                        })}
                    </ul>
                    <div className="border border-white/20"></div>
                    <div className=" flex items-center gap-4">
                        <Link href={project?.live}>
                        <TooltipProvider delayDuration={100}>
                            <Tooltip>
                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5  flex justify-center items-center group">
                                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent-default"/>
                                   
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Project live</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        </Link>
                        <Link href={project?.githup}>
                        <TooltipProvider delayDuration={100}>
                            <Tooltip>
                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5  flex justify-center items-center group">
                                    <BsGithub className="text-white text-3xl group-hover:text-accent-default"/>
                                   
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>githup repository</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full xl:w-[50%]">
                <Swiper 
                spaceBetween={30} 
                slidesPerView={1} 
                className="xl:h-[500px] mb-12" onSlideChange={handelSlidChenge}>
                    {projects.map((project,index)=>{
                        return (
                        <SwiperSlide key={index} className="w-full ">
                            <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                {/* overlay */}
                                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                {/* image */}
                                <div className="relative h-full w-full ">
                                    <Image src={project?.image} fill className="object-cover" alt=""/>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                        );
                    })}
                    {/* slider buttoon */}
                    <WorkSliderBtns 
                    containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                    btnStyles="bg-accent-default hover:bg-accent-hover text-primary text-[22px] w-[40px] h-[30px] flex justify-center items-center transition-all"
                    />
                </Swiper>
            </div>
        </div>
    </div>
    </motion.section>
    </>)
}
export default Work;