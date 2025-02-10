import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

export default function Header2(){
    return(
    <div className="bg-white flex items-center text-center justify-center ml-[250px] mr-80 gap-4">
    <h3 className="text-gray-800 px-8 py-3 items-center font-bold text-2xl">Bandage</h3>
    <ul className="flex text-gray-500 items-center gap-10 justify-center px-8 font-bold ">

      <Link href="/">
      <li>Home</li>
      </Link>

      <Link href="/product">
      <li className="flex flex-row gap-2 items center">Product
      </li>
     
      </Link>

      <Link href="/pricing">
      <li>Pricing</li>
      </Link>

      

      <Link href="/contact">
      <li>Contact</li>
      </Link>

    </ul>

    <div className="items-center flex text-blue-400 font-bold gap-8">
    <Link href="" className=" flex flex-row items-center gap-2">
     
    Login 
    </Link>
<button className="bg-[#23A6F0] border rounded-md text-white font bold h-[52px] w-[214px] flex justify-center items-center p-2 m-4">Become a member<GoArrowRight className="h-[20px] w-[20px] ml-2"/></button>

      </div>
      </div>
    )
}