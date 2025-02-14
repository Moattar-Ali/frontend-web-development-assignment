
import Image from "next/image";

export default function Bestseller(){
    const productImages = [
        "/product-cover-5.png", 
        "/product-cover-5 -1.png",
         "/product-cover-5 -2.png",
          "/product-cover-5 -3.png",
           "/product-cover-5 -4.png",
            "/product-cover-5 -5.png",
             "/product-cover-5 -6.png",
              "/product-cover-5 -7.png",
    ];

    return(
       <div className="justify-center items-center mx-auto my-auto">
        <div className="flex flex-col mt-10 mb-12 text-center mx-auto my-auto items-center">
            <h4 className="text-xl mt-3">Featured Products</h4>
            <h3 className="font-bold text-3xl mt-3">BESTSELLER PRODUCTS</h3>
            <p className="text-gray-500 text-xl mt-3 font-bold">Problems trying to resolve the conflict between </p>
        </div>
        <div className="flex flex-wrap w-[1124px] h-[1652px] mx-auto gap-8">
            {productImages.map((image, index)=>(
                <div key={index} className="">
                    <div>
                        <Image src={image} 
                        alt={`products ${index+1}`}
                        height={427} 
                        width={239}
                    
                    
                         />
                        </div>
                        <div className="gap-5">
                        <div className="text-center mt-5">
                            <h5 className="font-bold text-xl justify-center items-center mx-auto">Graphic Design</h5>
                            <p className="text-gray-500 font-bold text-normal mx-auto justify-center items-center p-5">English Department</p>
                            </div>
                            <div className="flex gap-2 items-center justify-center">
                          <span className="text-center text-gray-500 font-bold">$16.48</span>
                          <span className="text-center text-[#23856D] font-bold">$6.48</span>

                        </div>

                       <div className="mt-10 flex border-b justify-center gap-3">
                       <span className="color blue"></span>
                       <span className="color green"></span>
                       <span className="color orange"></span>
                       <span className="color black"></span>
                       </div>
                       </div>
                </div>
            ))}
                    </div>
       </div>
    )
}