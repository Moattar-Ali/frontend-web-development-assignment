import Image from "next/image"

export default function BestSell (){
    const bestSellItem = [
        "/product-cover-5 (8).png",
        "/product-cover-5 (9).png",
        "/product-cover-5 (10).png",
        "/product-cover-5 (11).png",
        "/product-cover-5 (12).png",
        "/product-cover-5 (13).png",
        "/product-cover-5 (14).png",
        "/product-cover-5 (15).png",
        
    ]
    return(
        <div className="w-full justify-center items-center">
            <h3 className="font-bold text-2xl mt-10 mb-10 text-center">BESTSELLER PRODUCTS</h3>
            
                <div className="flex flex-wrap w-full justify-center mx-auto mt-5 gap-6 border-t shadow-md">
                {bestSellItem.map((image, index)=>(
                    <div key={index} className="h-[432px] w-[238px] ml-4 mt-5">
                        <Image src={image} alt={`best seller ${index+1}`} height={280} width={239}/>
                          <div className="text-center mt-5">
                            <h5 className="font-bold text-xl justify-center items-center mx-auto">Graphic Design</h5>
                            <p className="text-gray-500 font-bold text-normal mx-auto justify-center items-center p-5">English Department</p>
                            </div>
                            <div className="flex gap-2 items-center justify-center">
                          <span className="text-center text-gray-500 font-bold">$16.48</span>
                          <span className="text-center text-[#23856D] font-bold">$6.48</span>

                        </div>
                      </div>
                    
                ))}
</div>
        
        
        
            </div>
    )
}