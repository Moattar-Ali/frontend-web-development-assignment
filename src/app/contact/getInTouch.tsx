import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";

export default function GetInTouch(){
    return(
        
            <div className="h-[800px] w-[100%] justify-center items-center ml-60" style={{backgroundImage:"url('/hero-2-bg-shape-cover.png')"}}>
            <h5 className="text-gray-500 font-bold mx-40 pt-40">CONTACT US</h5>
            <h1 className="font-bold text-gray-800 text-6xl mx-40 pt-10">Get in touch <br></br>
            today!</h1>
            <h4 className="pt-20 font-bold text-gray-500 text-xl mx-40">We know how large objects will act,
                 <br></br>
            but things on a small scale</h4>
            <h3 className="font-bold text-2xl text-gray-800 mt-10 mx-40">Phone ; +451 215 215 </h3>
            <h3 className="font-bold text-2xl text-gray-800 mt-5 mx-40">Fax : +451 215 215</h3>
            <ul className="flex gap-8 mt-10 text-center items-center mx-40">
                <Link href="">
               
                <li><IoLogoTwitter className="h-[27px] w-[27px] text-gray-900"/></li>
            </Link>

            <Link href="">
            <li><FaFacebookSquare className="h-[27px] w-[27px] text-gray-900"/></li>
            </Link>

            <Link href="">
            <li><FaInstagram className="h-[27px] w-[27px]"/></li>
            </Link>
            
            <Link href="">
            <li><FaLinkedin className="h-[27px] w-[27px] text-gray-900"/></li>
            </Link>
            </ul>
            </div>
            
        
    )
}