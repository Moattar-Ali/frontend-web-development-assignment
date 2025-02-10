import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";
import Image from "next/image";

export default function Innovation (){
    const innovationImages = [
        "/unsplash_gMsnXqILjp4.png",
        "/unsplash_PSmDDeXaEWE.png",
        "/unsplash_1-aA2Fadydc.png",
        "/unsplash_mcSDtbWXUZU.png"
    ]
    return(
        <div className="h-[800px] w-full mt-20 mb-20 mx-auto">
        <div className="h-[280px] justify-center items-center text-center mt-20">
            <h5 className="font-bold text-gray-500">WHAT WE DO</h5>
            <h2 className="font-bold text-5xl mt-5 text-gray-700">Innovation tailored for you</h2>
            <div className="flex gap-2 items-center text-center justify-center gap-5 mt-10">
            <Link href="/" className=" flex gap-5 font-bold">
             Home
             <SlArrowRight className="h-[16px] w-[16px] mt-1 text-gray-500"/>
            </Link>
             
              <Link href="/blog" className="text-gray-500">Team</Link>
            
            </div>

            <div className="mt-10 justify-center flex mb-10 items-center" >
                <div className="w-[50%]">
                    <Image src="/unsplash_Lks7vei-eAg.png" alt="innovation Images" height={630} width={600} />
                </div>
                <div className="gap-2 grid grid-cols-2 w-[600px]">
                    {innovationImages.map((image,index)=>(
                        <div key={index}>
                            <Image src={image} alt="hero picture" height={200} width={361}/>
                            </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    )
}