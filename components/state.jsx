"use client"
import CountUp from "react-countup";
const count=[
    {
        num:3,
        text:"years of experience"
    },
    {
        num:20,
        text:"Project completed"
    },
    {
        num:8,
        text:"technologies mastred"
    },
    {
        num:100,
        text:"client statsfied"
    },
]
const Stats=()=>{
    return(<>
    <section className="pt-4 pb-12  xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {
                    count.map((el,index)=>{
                        return(
                            <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                                <CountUp end={el.num} duration={5}
                                className="text-4xl xl:text-6xl font-extrabold"
                                />
                                <p className={`${el.text.length<15 ? "max-w-[100px]" :
                                    "max-w-[150px]"
                                }leading-snug text-white/80 capitalize`}>{el.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
    </>)
}
export default Stats;