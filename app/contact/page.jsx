"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectLabel, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt,FaEnvelope,FaMapMarkedAlt } from "react-icons/fa";
const info=[
    {
        icon:<FaPhoneAlt/>,
        title:"phone",
        description:"(+212) 691-425501"
    },
    {
        icon:<FaEnvelope/>,
        title:"Email",
        description:"Soufiane.1refai@gmail.com"
    },
    {
        icon:<FaMapMarkedAlt/>,
        title:"Address",
        description:"Morroco,Rabat Sale"
    },
]
import { motion } from "framer-motion";
const Contact = () => {
    return <>
        <motion.section initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease:"easeIn"}}} className="py-6">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form action="" className="flex flex-col gap-6 p-10 bg-[#27272C] rounded-xl">
                        <h3 className="text-4xl text-accent-default">let's work together</h3>
                        <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quidem aliquam vero tempore aliquid.</p>
                        <div className="gap-6 grid-cols-1 md:grid-cols-2 grid">
                            <Input type="first name" placeholder="First name"/>
                            <Input type="last name" placeholder="Last name"/>
                            <Input type="email" placeholder="Email adress"/>
                            <Input type="phone" placeholder="Phone number"/>

                        </div>
                        <Select >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="select a service" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Select a service</SelectLabel>
                                    <SelectItem value="Web devlopment">Web devlopment</SelectItem>
                                    <SelectItem value="UI/UX">UI/UX Design</SelectItem>
                                    <SelectItem value="Logo">Logo Design</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Textarea className="h-[200px]" placeholder="Type your message here"/>
                        <Button size="md" className="max-w-40">Send message</Button>
                        </form>
                    </div>
                    {/* information personnele */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-6">
                            {info.map((item,index)=>{
                                return(
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272C] text-accent-default rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    </>
}
export default Contact;