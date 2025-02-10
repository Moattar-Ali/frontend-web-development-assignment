import React from "react";
import { IoCallOutline, IoCartOutline, IoPersonAddOutline } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { GrFavorite } from "react-icons/gr";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";



export default function Header(){
    return(
       <div className="h-[136px] w-[1439px] bg-[#FFFFFF] mx-auto flex flex-col border-b shadow-sm ">
        <div className="w-full bg-[#252B42] text-white font-bold justify-between flex items-center px-7 py-4">
          <div className="items-center flex flex-row gap-2">
      <IoCallOutline className="h-[16px] w-[16px]"/>(225) 555-0118
      </div>
      <div className="items-center flex flex-row gap-2">
      <BsEnvelope className="h-[16px] w-[16px]"/>michelle.rivera@example.com
      </div>
      <div className="items-center flex flex-row gap-2">
      <h6 className="text-bolder">Follow Us  and get a chance to win 80% off</h6>
      </div>

      <div className="items-center flex flex-row gap-5">
      <h6>Follow Us  :</h6>

    <div className="h-[16px] w-[16px] flex flex-row gap-5">
      <Link href="">
      <FaInstagram />
      </Link>
      </div>

      <div className="h-[16px] w-[16px] flex flex-row gap-5">
      <Link href="">
      <FaYoutube />
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
    <div className="bg-white w-full flex">
      <h3 className="text-gray-800 px-8 py-3 items-center font-bold text-2xl">Bandage</h3>
      <ul className="flex text-gray-500 items-center gap-8 justify-center px-8 font-bold ">

        <Link href="/">
        <li>Home</li>
        </Link>

        <Link href="/product1">
        <li className="flex flex-row gap-2 items center"> Shop <RiArrowDropDownLine className="h-[25px] w-[25px]" />
        </li>
       
        </Link>

        <Link href="/about">
        <li>About</li>
        </Link>

        <Link href="/blog">
        <li>Blog</li>
        </Link>

        <Link href="/contact">
        <li>Contact</li>
        </Link>

        <Link href="/pages">
        <li>Pages</li>
        </Link>

      </ul>

      <div className="items-center flex text-blue-400 font-bold gap-8 ml-auto mr-5">
      <Link href="" className=" flex flex-row items-center gap-2">
        <IoPersonAddOutline />
      Login / Register
      </Link>

<button >
<IoIosSearch className="h-[20px] w-[20px]" />
</button>

<button className="flex flex-row">
<IoCartOutline className="h-[20px] w-[20px]" />1
</button>

<button className="flex flex-row">
<GrFavorite className="h-[20px] w-[20px]" />1
</button>

        </div>
        </div>
       </div>
    )
}