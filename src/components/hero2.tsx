import Image from "next/image"

export default function Hero2(){
    return(
        <div className="flex h-[682px] w-[1439px] mb-10 mx-auto">
           <div>
            <Image src="/asian-woman-man-with-winter-clothes 1.png" alt={"product image"} height={680} width={704} />
            </div> 
           <div className="gap-[30px] px-40 py-40">
            <h5 className="text-xl font-bold text-gray-300">SUMMER 2020</h5>
            <h2 className="text-6xl font-bold mt-10">Part of the Neural Universe</h2>
            <h4 className="text-2xl text-gray-700 mt-10">We know how large objects will act, 
            but things on a small scale.</h4>
            <div className="h-[52px] w-[339px] mt-10">
            <span>
                <button className="h-[52px] w-[156px] bg-[#2DC071] text-white font-bold">BUY NOW</button>
            </span>
            <span>
                <button className="h-[52px] w-[156px] text-[#2DC071] font-bold border border-[#2DC071]">READ MORE</button>
            </span>
            </div>
           </div>
        </div>
    
    )
}