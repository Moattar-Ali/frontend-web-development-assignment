import Link from "next/link";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer(){
    return(
        <div className="h-[488px] w-[1439px] bg-white flex flex-col shadow-sm mx-auto items-center">
            <div className="bg-gray flex flex-row w-full px-40">
            <h3 className="text-gray-800 py-10 items-center font-bold text-2xl">Bandage</h3>
            <div className="text-blue-400 flex items-center ml-auto gap-5 px-20">
            <div className="h-[16px] w-[16px] flex flex-row gap-5">
      <Link href="">
      <FaInstagram />
      </Link>
      </div>

      

      <div className="h-[16px] w-[16px] flex flex-row gap-5">
      <Link href="">
      <FaFacebook />
      </Link>
      </div>

      <div className="h-[16px] w-[16px] flex flex-row gap-5">
      <Link href="">
      <FaTwitter/>
      </Link>
      </div>
      </div>
            
            </div>
            <div className="flex gap-[60px] px-40 py-20 w-full">
            <div className="flex flex-col text-gray-500 gap-2 font-bold">
                <h5 className="text-gray-800 ">Company Info</h5>
               <Link href="">About Us</Link>
               <Link href="">Carrier</Link>
               <Link href="">We Are Hiring</Link>
               <Link href="">Blog</Link>
            </div>

            <div className="flex flex-col text-gray-500 gap-2 font-bold">
            <h5 className="font-bold text-gray-800 ">Legal</h5>
            <Link href="">About Us</Link>
            <Link href="">Carrier</Link>
            <Link href="">We Are Hiring</Link>
            <Link href="">Blog</Link>
            </div>

            <div className="flex flex-col text-gray-500 gap-2 font-bold">
            <h5 className="font-bold text-gray-800 ">Features</h5>
               <Link href="">Business Marketing</Link>
               <Link href="">User Analytic</Link>
               <Link href="">Live Chat</Link>
               <Link href="">Unlimited Support</Link>
            </div>

            <div className="flex flex-col text-gray-500 gap-2 font-bold">
            <h5 className="font-bold text-gray-800 ">Resources</h5>
               <Link href="">IOS And Android</Link>
               <Link href="">Watch a demo</Link>
               <Link href="">Customers</Link>
               <Link href="">API</Link>
            </div>
            <div className="flex flex-col text-gray-500 gap-2 ">
                <h5 className="font-bold text-gray-800 ">Get In Touch</h5>
<div className="flex flex-row font-sm bg-gray h-[60px]">
            <input placeholder="Your Email" className="border rounded p-5"></input>
<button className="bg-blue-400 text-white p-5 rounded text-center">Subscribe</button>

</div>
            </div>
            </div>
            <div className="w-full text-gray-500 font-bold font-sm py-5 mr-auto mx-40">
            Made With Love By Finland All Right Reserved 
            </div>
        </div>
    )
}