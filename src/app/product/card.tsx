import Image from "next/image";

export default function ProductCard(){
    const cards = [
        "/fixed-height.png",
        "/fixed-height (1).png",
        "/fixed-height (2).png",
        "/fixed-height (3).png",
        "/fixed-height (11).png",
        "/fixed-height (4).png",
        "/fixed-height (5).png",
        "/fixed-height (6).png",
        "/fixed-height (7).png",
        "/fixed-height (8).png",
        "/fixed-height (9).png",
        "/fixed-height (10).png",
    ]

    return(
        <div className="h-[1778px] w-[1124px] flex gap-6 flex-wrap m-[2%] mx-auto justify-center items-center">
         {cards.map((image, index)=>(
            <div key={index}>
        <Image src={image} alt={`card ${index+1}`} height={300} width={239} />
        <div className="gap-[2%]">
                        <div className="text-center m-2">
                            <h5 className="font-bold text-xl justify-center items-center mt-4">Graphic Design</h5>
                            <p className="text-gray-500 font-bold text-normal mb-2 justify-center items-center p-5">English Department</p>
                            </div>
                            <div className="flex gap-2 items-center justify-center">
                          <span className="text-center text-gray-500 font-bold mb-2">$16.48</span>
                          <span className="text-center text-[#23856D] font-bold mb-2">$6.48</span>

                        </div>
            </div>
            <div className=" flex justify-center gap-3 mt-2 mb-2">
                       <span className="color blue"></span>
                       <span className="color green"></span>
                       <span className="color orange"></span>
                       <span className="color black"></span>
                       </div>
            </div>
         ))}
        </div>
    )
}