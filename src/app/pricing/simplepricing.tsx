import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";

export default function SimplePricing(){
    return(
        <div className="text-center font-bold text-gray-700 justify-center items-center m-20">

            <h5>PRICING</h5>
            <h1 className="text-6xl mt-5 mb-5">Simple Pricing</h1>

            <div className="flex gap-2 items-center text-center justify-center gap-5 mt-10">
            <Link href="/" className=" flex gap-5 font-bold">
             Home
             <SlArrowRight className="h-[16px] w-[16px] mt-1 text-gray-500"/>
            </Link>
             
              <Link href="/pricing" className="text-gray-500">Pricing</Link>
            
            </div>
            <div className="m-20">
                <h2 className="text-4xl mb-10">Pricing</h2>
                <p>Problems trying to resolve the conflict between <br></br>
                the two major realms of Classical physics: Newtonian mechanics </p>
                
           
        </div>
        </div>
    )
}