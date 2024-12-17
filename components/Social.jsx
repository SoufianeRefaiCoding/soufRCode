import Link from "next/link"
import {FaGithub ,FaLinkedinIn,FaInstagram,FaFacebook} from "react-icons/fa"
const Socials=[
    {icon:<FaGithub/>,path:""},
    {icon:<FaLinkedinIn/>,path:""},
    {icon:<FaInstagram/>,path:""},
    {icon:<FaFacebook/>,path:""},
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