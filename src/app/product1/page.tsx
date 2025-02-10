import Footer from "../../components/footer";
import Header1 from "../product/header1";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";
import CarouselItem from "./carouselinner";
import Brands from "../product/brands";
import BestSell from "./bestseller";
import Description from "./description";

export default function Product1 (){
    return(
        <div>
            <Header1/>
            
            <div className="w-full flex gap-2 items-center mt-10 ml-[400px]">
            <Link href="/" className=" flex gap-2 font-bold">
             Home
             <SlArrowRight className="h-[16px] w-[16px] mt-1 text-gray-500"/>
            </Link>
             
              <Link href="/shop" className="text-gray-500">Shop</Link>
            </div>
             
             <CarouselItem/>
             <Description/>
             <BestSell/>
             <Brands/>
            <Footer/>
        </div>
    )
}