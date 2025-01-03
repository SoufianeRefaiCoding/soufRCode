"use client";
import {motion} from 'framer-motion';
import Image from "next/image";
const Photo=()=>{
    return <div className='w-full h-full relative'>
            <motion.div  >
            <motion.div 
            initial={{opacity:0}}
            animate={{
                opacity:1,
                transition:{delay:2, duration:0.4, ease:"easeInOut"}
            }}
            className="  mix-blend-lighten w-[248px] h-[248px] xl:w-[438px] xl:h-[438px] absolute">
                <Image 
                src='/assets/profil11.png'
                priority
                quality={100}
                fill
                alt=""
                className='object-contain rounded-b-lg'
                />
  <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-16 w-2/3 bg-gradient-to-t from-black/30 to-transparent rounded-b-lg" ></div>
  </motion.div>
        </motion.div>
{/*circle*/}
        <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
        fill="transparent"
        viewBox="0 8 586 506"
        xmlns="http://www.w3.org/2088/svg"
        >
        <motion.circle className=""
        cx="253"
        cy="253"
        r="250"
        stroke="#00ff99"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{strokeDasharray:"24 10 0 0"}}
        animate={{
            strokeDasharray:["15 128 25 25","16 25 92 72","4 250 22 22"],
            rotate:[120,360]
        }}
        transition={{
            duration:20,
            repeat:Infinity,
            repeatType:"reverse"
        }}
        >

        </motion.circle>
        </motion.svg>
    </div>
}
export default Photo;