import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

export default function FreeTrial(){
    return(
        <div className="w-full items-center justify-center mt-20 mb-20 text-center">
            <h2 className="font-bold text-4xl text-gray-700 mb-8">Start your 14 days free trial</h2>
            <p className="font-bold text-gray-500 mb-8">Met minim Mollie non desert Alamo est sit cliquey dolor
                <br></br> 
            do met sent. RELIT official consequent.</p>
            <button className="h-[52px] w-[186px] bg-[#23A6F0] text-white font bold rounded-md">Try it free now</button>
            <div className="flex gap-8 mt-8 justify-center text-center items-center">
                <Link href="">
            <IoLogoTwitter className="h-[27px] w-[27px] text-blue-500"/>
            </Link>

            <Link href="">
            <FaFacebookSquare className="h-[27px] w-[27px] text-blue-900"/>
            </Link>

            <Link href="">
            <FaInstagram className="h-[27px] w-[27px]"/>
            </Link>
            
            <Link href="">
            <FaLinkedin className="h-[27px] w-[27px] text-blue-500"/>
            </Link>
            </div>
        </div>
    )
}