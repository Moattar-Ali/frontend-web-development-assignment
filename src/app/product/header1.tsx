import Link from "next/link";
import { BsEnvelope } from "react-icons/bs";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";
import { IoCallOutline, IoPersonAddOutline, IoCartOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Header1(){
    return(
        <>
        <div className="h-[136px] w-[1439px] bg-[#FFFFFF] mx-auto flex flex-col border-b shadow-sm items-center">
        <div className="w-full bg-[#23856D] text-white font-bold justify-center gap-14 flex items-center px-6 py-4">
          <div className="items-center flex flex-row gap-2 text-gray-300">
      <IoCallOutline className="h-[16px] w-[16px]"/>(225) 555-0118
      </div>
      <div className="items-center flex flex-row gap-2 text-gray-300">
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
    <div className="bg-white w-full flex justify-evenly">
      <h3 className="text-gray-800 px-8 py-3 items-center font-bold text-2xl">Bandage</h3>
      <ul className="flex text-gray-500 items-center gap-6 justify-center px-6 font-bold">

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

      <div className="items-center flex text-blue-400 font-bold gap-4 mr-5">
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
        </>
    )
}