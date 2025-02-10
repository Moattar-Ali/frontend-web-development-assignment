import Image from "next/image"

export default function Hero1(){
    return(
    
        <div className="flex mx-auto px-40 py-40 bg-[#23856D] h-[790px] w-[1439px] mx-auto gap-20">
            <div className="w-[509px] h-[432px] text-white pl-20 gap-10">
                <h4 className="text-xl">SUMMER 2020</h4>
                <h1 className="font-bold text-6xl gap-10 mt-10 ">Vita Classic Product</h1>
                <p className="text-xl mt-10 gap-10">We know how large objects will act, We know how are objects will act, We know</p>
                <div className="h-[52px] w-[295px] gap-[34px] mt-10 gap-10">
                <span className="text-2xl font-bold mr-5 ml-0">$16.48</span>
                <span>
                    <button className="text-white font-bold bg-[#2DC071] h-[52px] w-[184px] text-normal">ADD TO CART</button>
                </span>
                </div>
            </div>
            <div className="h-[600px] w-[510px] pr-10">
            <Image src="/shop-hero-2-png-picture-1.png" alt={"Product image"} height={600} width={500} />
            </div>

        </div>
        
    
    )
}