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
        <div className="h-[800px] w-full mt-20 mb-20">
        <div className="h-[280px] w-full justify-center items-center text-center mt-20">
            <h5 className="font-bold text-gray-500">WHAT WE DO</h5>
            <h2 className="font-bold text-5xl mt-5 text-gray-700">Innovation tailored for you</h2>
            <div className="flex gap-2 items-center text-center justify-center gap-5 mt-10">
            <Link href="/" className=" flex gap-5 font-bold">
             Home
             <SlArrowRight className="h-[16px] w-[16px] mt-1 text-gray-500"/>
            </Link>
             
              <Link href="/blog" className="text-gray-500">Team</Link>
            
            </div>

            <div className="h-[530px] mt-10 ml-40 mr-60 justify-center items-center flex">
                <div className="mx-auto">
                    <Image src="/unsplash_Lks7vei-eAg.png" alt="innovation Images" height={530} width={700}/>
                </div>
                <div className="flex h-full w-[50%] flex-wrap gap-2">
                    {innovationImages.map((image,index)=>(
                        <div key={index}>
                            <Image src={image} alt="hero picture" height={260} width={361} layout="responsive"/>
                            </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    )
}