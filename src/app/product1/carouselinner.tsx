import Image from "next/image"
import { BsCart3 } from "react-icons/bs";
import { FaEye } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import { ImStarEmpty } from "react-icons/im";
import { IoMdHeartEmpty } from "react-icons/io";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function CarouselItem (){
    const carouselCaption = [
        "/carouselCaptions (1).png",
        "/carouselCaptions.png"
    ];

    return(
        
        <div className="justify-center w-full mt-10">
            <div className="flex mx-auto flex-wrap justify-evenly">
              <div className=" mx-auto">
            <Image src="/carousel-inner.png" alt="carousel item" height={450} width={506} className="mb-5 justify-center"/>
            <span className="flex gap-[390px] text-white font-bold"><SlArrowLeft className="h-[60px] w-[30px] mx-5 mt-[-200px]"/><SlArrowRight className="h-[60px] w-[30px] mt-[-200px]" />

            </span>
            </div>
            <div className="flex flex-col mx-auto">
            <h4 className="text-xl font-bold mt-5 ml-10 text-gray-700">Floating Phone</h4>
            
            <div className="flex gap-2 mt-3 ml-10">
            <GoStarFill className="h-[20px] w-[20px] text-yellow-300"/>
            <GoStarFill className="h-[20px] w-[20px] text-yellow-300"/>
            <GoStarFill className="h-[20px] w-[20px] text-yellow-300"/>
            <GoStarFill className="h-[20px] w-[20px] text-yellow-300"/>
            <ImStarEmpty className="h-[20px] w-[20px] text-yellow-300"/>
            <h6 className="text-gray-700 font-bold">10 Reviews</h6>
            </div>
            <div className="justify-center">
            <h3 className="font-bold text-2xl ml-10 mt-5">$1,139.33</h3>
            <h6 className="font-bold ml-10 mt-3">
            <span className="text-gray-700">Availability  :</span>
            <span className="text-[#23A6F0]"> In Stock </span>
            </h6>
            <p className="text-gray-500 ml-10 mt-5 ">Met minim Mollie non desert Alamo est sit cliquey dolor <br></br>
             do met sent. RELIT official consequent door ENIM RELIT Mollie. <br></br>
             Excitation venial consequent sent nostrum met.</p>
             </div>
             <div className="mt-10 flex gap-2 ml-10">
                       <span className="bg-[#23A6F0] h-[30px] w-[30px] rounded-full"></span>
                       <span className="bg-[#2DC071] h-[30px] w-[30px] rounded-full"></span>
                       <span className="bg-[#E77C40] h-[30px] w-[30px] rounded-full"></span>
                       <span className="bg-[#252B42] h-[30px] w-[30px] rounded-full"></span>
                       </div>
                       <div className="flex gap-10 ">
                       <button className="bg-blue-500 h-[44px] w-[148px] items-center font-bold rounded-md ml-10 mt-14 text-white">Select Options</button>
                       <span className="flex mt-[71px] gap-6">
                       <IoMdHeartEmpty className="h-[20px] w-[20px]" /><BsCart3 className="h-[20px] w-[20px]"/><FaEye className="h-[20px] w-[20px]"/>
                       </span>
                       </div>
            </div>
            </div>
        <div className="flex gap-4 items-left justify-left ml-20">
             {carouselCaption.map((image,index)=>(
                <div key={index}>
                    <Image src={image} alt={`carousel item ${index+1}`} height={75} width={100}/>
                    </div>
                    
             ))}
             
             
        </div>
        </div>
        
        
    )
}