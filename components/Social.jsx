import Link from "next/link"
import {FaGithub ,FaLinkedinIn,FaInstagram,FaFacebook} from "react-icons/fa"
const Socials=[
    {icon:<FaGithub/>,path:"https://github.com/SoufianeRefaiCoding/"},
    {icon:<FaLinkedinIn/>,path:"https://www.linkedin.com/in/soufiane-refai/"},
    {icon:<FaInstagram/>,path:"https://www.instagram.com/soufianerefai_coding"},
    {icon:<FaFacebook/>,path:"https://www.facebook.com/profile.php?id=100090874344496"},
]
const Social=({containerStyles,iconStyles})=>{
 return <div className={containerStyles}>
    {Socials.map((el,index)=>{
        return(<>
            <Link key={index} href={el.path} className={iconStyles}>{el.icon}</Link>
        </>)
    })}
 </div>
}
export default Social;