import Footer from "../../components/footer";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SlArrowRight } from "react-icons/sl";
import Image from "next/image";
import { HiViewGrid } from "react-icons/hi";
import Brands from "./brands";
import ProductCard from "./card";
import Pagination from "./pagination";
import { FaOutdent } from "react-icons/fa";
import Header1 from "./header1";

export default function ProductList (){

    const productBg = [
     "/media bg-cover (3).png",
       "/media bg-cover (4).png",
     "/media bg-cover (2).png",
     "/media bg-cover (1).png",
     "/media bg-cover.png",
    ];
    return(
        <>
       <Header1/>
        
        <div className="flex w-full justify-evenly m-10 gap-[350px]">
            <h3 className="text-2xl font-bold mr-60">Shop</h3>

            
            <div className="flex gap-2 items-center mr-20">
            <Link href="/" className=" flex gap-2 font-bold">
             Home
             <SlArrowRight className="h-[16px] w-[16px] mt-1 text-gray-500"/>
            </Link>
             
              <Link href="/shop" className="text-gray-500">Shop</Link>
            </div>
</div>
            <div className="h-[223px] w-[1088px] flex justify-evenly gap-6 items-center mx-[400px] my-20">
            {productBg.map((image, index)=> (
                <div key={index}>
                    <Image src={image} alt={`product image ${index+1}`} height={223} width={205} />
                    <div className="relative bottom-[120px] left-10" >
                        <h5 className="font-bold text-white ">CLOTHS</h5>
                        <p className="text-white">5 Items</p>
                    </div>
                    </div>
            ))}
            </div>

        <div className="flex justify-evenly items-center text-center mr-40 ml-40">
       <h6 className="text-gray-500 font-bold">Showing all 12 results</h6>
       <h6 className="flex text-gray-500 font-bold gap-5">Views: <HiViewGrid className="border h-[16px] w-[16px] mt-1" /><FaOutdent className="border h-[16px] w-[16px] mt-1"/></h6>
       <div className="flex gap-4">
       <button className="h-[50px] w-[161px] flex border bg-gray-100 text-gray-500 px-8 items-center text-center rounded-md ">Popularity<RiArrowDropDownLine className="h-[100px] w-[100px]"/></button>
       <button className="h-[50px] w-[94px] border text-white font bold bg-[#23A6F0] rounded-md">Filter</button>
        </div>
        </div>

         <Brands/>
        <Footer/>
        <ProductCard/>
        <Pagination/>
        </>
    )
}