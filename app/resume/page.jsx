"use client"
import {FaHtml5, FaCss3, FaJs,FaLaravel,FaPhp,FaReact,FaVuejs,FaNodeJs,FaFigma,FaJira, FaBootstrap} from "react-icons/fa";
import {SiTailwindcss,SiNextdotjs} from "react-icons/si";
import{Tabs,TabsContent,TabsTrigger,TabsList} from "@/components/ui/tabs";
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
// about Section
const about ={
    title:"About me",
    description:"I'm Soufiane Refai, a passionate Full-Stack Web Developer with hands-on experience in building dynamic websites and applications. creating user-friendly and scalable solutions. With a solid background in both front-end and back-end development, I excel in enhancing user experiences, optimizing performance, and solving complex challenges. Let's turn your ideas into impactful digital experiences.",
    infos:[
        {
            fieldName:"Name",
            value:"Soufiane refai"
        },{
            fieldName:"Email",
            value:"soufiane.1refai@gmail.com"
        },{
            fieldName:"Phone",
            value:"(+212) 691 425 501"
        },{
            fieldName:"Linkdin",
            value:"soufiane refai"
        },{
            fieldName:"Experience",
            value:"+3 years"
        },{
            fieldName:"Nationality",
            value:"Morroco"
        }
    ]
}
// experience Data
const experience={
    icon:"",
    title:"My Experience",
    description:"Dynamic Web Developer with experience in creating tailored websites and applications. Skilled in delivering user-centric solutions, enhancing functionality, and optimizing digital experiences. Passionate about solving challenges and driving impactful results.",
    items:[
        {
            company:"Freelance Web Developer",
            position:"Web developer",
            doration:"2025"
        },
        {
            company:"Start Solution",
            position:"Web Developer Intern",
            doration:"2024"
        },
        {
            company:"Cisco",
            position:"Python Essentails 1",
            doration:"2024"
        },
        {
            company:"Tek Inside",
            position:"Web Developer Intern",
            doration:"2022-2023"
        },
        {
            company:"Cnm Network",
            position:"Web Developer Intern",
            doration:"2021-2022"
        }, 
        {
            company:"OpenClassrooms",
            position:"Certifications html/css/javascript",
            doration:"2021"
        },
        
    ]
}
// education Data
const education={
    icon:"",
    title:"My Education",
    description:"I have a strong educational background in technology and digital development, with a focus on system engineering and specialized technical skills. ",
    items:[
        {
            institution:"Supmti",
            degree:"Ingénierie des Systèmes Informatiques",
            doration:"2024-2025"
        },{
            institution:"Ofppt",
            degree:"Technician Specialized in Digital Development",
            doration:"2022 - 2024"
        },{
            institution:"Salah Eddin Ayoube",
            degree:"Baccalaureate in Experimental Sciences",
            doration:"2018 - 2019"
        },
        
    ]
}
// skils
const skills={
    title:"My skills",
    description:"Proficient in creating user-focused web solutions, with strengths in both front-end and back-end development. Experienced in project management, problem-solving, and delivering high-quality results. Strong communicator with a collaborative mindset and a knack for optimizing performance and user experience.",
    skillsList:[
        {
            icon:<FaHtml5/>,
            title:"Html5"
        },{
            icon:<FaCss3/>,
            title:"Css3"
        },{
            icon:<FaJs/>,
            title:"Javascript"
        },{
            icon:<FaReact/>,
            title:"React"
        },{
            icon:<FaVuejs/>,
            title:"VueJs"
        },{
            icon:<FaNodeJs/>,
            title:"NodeJs"
        },{
            icon:<FaBootstrap/>,
            title:"Bootstrap"
        },{
            icon:<SiTailwindcss/>,
            title:"Tailwindcss"
        },{
            icon:<FaPhp/>,
            title:"Php"
        },{
            icon:<FaLaravel/>,
            title:"Php"
        },{
            icon:<FaJira/>,
            title:"Jira"
        },{
            icon:<FaFigma/>,
            title:"figma"
        }
    ]
}
const Resume=()=>{
    return(<>
        <div className="flex justify-center items-center my-8 pb-12">
        <h2 className="text-4xl font-bold  text-outline text-accent-default transition-transform duration-500 ease-in-out hover:rotate-360 hover:text-accent-hover">
        My Story & Skills
        </h2>
   </div>
    <motion.div initial={{opacity:0}} 
    animate={{
        opacity:1,
        transition:{delay:2.4,duration:0.4,ease:"easeIn"}}} 
    className=" flex min-h-[88vh] items-center justify-center py-12 xl:py-0"
    >
      
    <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>
        {/* content */}
        <div className="min-h-[70vh] w-full ">
        {/* Experience */}
            <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{experience.title}</h3>
                    <p className="max-w[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                    <ScrollArea className="h-[400px]">
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                            {experience.items.map((el,index)=>{
                                return(
                                    <li className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1" key={index}>
                                        <span className="text-accent-default">{el.doration}</span>
                                        <h3 className="text-xl max-w-[268px] min-h-[60px] text-center lg:text-left">{el.position}</h3>
                                        <div className="flex items-center gap-3">
                                            <span className="w-[6px] h-[6px] rounded-full bg-accent-default"></span>
                                            <p className="text-white/60">{el.company}</p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </ScrollArea>
                </div>
            </TabsContent>
         {/* Education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{education.title}</h3>
                    <p className="max-w[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                    <ScrollArea className="h-[400px]">
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                            {education.items.map((el,index)=>{
                                return(
                                    <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                        <span className="text-accent-default">{el.doration}</span>
                                        <h3 className="text-xl max-w-[268px] min-h-[60px] text-center lg:text-left">{el.degree}</h3>
                                        <div className="flex items-center gap-3">
                                            <span className="w-[6px] h-[6px] rounded-full bg-accent-default"></span>
                                            <p className="text-white/60">{el.institution}</p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </ScrollArea>
                </div>
            </TabsContent>
         {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px] ">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{skills.title}</h3>
                            <p className="max-w-[600px] text-white/60  mx-auto xl:mx-0">{skills.description}</p>
                    </div>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                        {
                            skills.skillsList.map((skill,index)=>{
                                return(
                                    <li key={index}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                    <div className="text-6xl group-hover:text-accent-default transition-all duration-300">{skill.icon}</div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="capitalize">{skill.title}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </TabsContent>
         {/* About me */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                    <h3 className="text-4xl font-bold ">{about.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                        {about.infos.map((el,index)=>{
                            return(
                                <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                    <span className="text-white/60">{el.fieldName}</span>
                                    <span className="text-xl">{el.value}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </TabsContent>
         
        </div>
        </Tabs>
    </div>
    </motion.div>
    </> )
}
export default Resume;