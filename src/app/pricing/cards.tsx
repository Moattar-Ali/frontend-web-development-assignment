import { FaCheckCircle } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";

export default function Cards(){
    return(
        <div className="justify-center items-center text-center m-20 gap-5 text-gray-700 font-bold">
            <div className="items-center justify-center text-center w-full flex gap-5">
        <h5>Monthly</h5>
        <FaToggleOff className="text-gray-300 h-[30px] w-[30px]"/>
        <h5>Yearly</h5>
        <button className="h-[44px] w-[109px] text-blue-500 bg-blue-300 rounded-full">Save 25%</button>
        </div>
        <div className="flex justify-center h-[360px] w-full mb-40 mt-20">
            <div className="h-[350px] w-[327px] justify-center items-center text-center mt-20 mb-20">
                <h3 className="font-bold text-2xl m-10">FREE</h3>
                <h5 className="mb-5 text-gray-500 text-xl">Organize across all <br></br>
                apps by hand</h5>
                <div className="flex text-[#23A6F0] text-center justify-center m-10">
                <h2 className=" font-bold text-5xl m-2">0</h2>
                 <ul className="m-2">
                    <li className="mr-[100%] font-bold text-2xl">$</li>
                    <li className="text-[#8EC2F2] mt-2">Per Month</li>
                 </ul>
                </div>
                <h6 className="flex gap-2 justify-center"><FaCheckCircle className="text-[#2DC071]  h-[25px] w-[25px]"/>
                Unlimited product updates
                </h6>
            </div>
            <div className="h-[400px] w-[327px] justify-center text-[#FFFFFF] items-center text-center bg-[#252B42] px-10 py-10 mt-[40px]">
                <h3 className=" text-2xl mb-5 mt-4">STANDARD</h3>
                <h5 className="mb-5">Organize across all <br></br>
                apps by hand</h5>
                <div className="flex text-[#23A6F0] text-center justify-center m-10">
                <h2 className=" font-bold text-5xl m-2">9.99</h2>
                 <ul className="m-2">
                    <li className="mr-[100%] font-bold text-2xl">$</li>
                    <li className="text-[#8EC2F2] mt-2">Per Month</li>
                 </ul>
                </div>
                <h6 className="flex gap-2 justify-center"><FaCheckCircle className="text-[#2DC071]  h-[25px] w-[25px]"/>
                Unlimited product updates
                </h6>
                <h6 className="flex gap-2 justify-center mt-3"><FaCheckCircle className="text-[#2DC071]  h-[25px] w-[25px]"/>
                Unlimited product updates
                </h6>
            </div>
            <div className="h-[350px] w-[327px] justify-center items-center text-center mt-20 mb-20">
                <h3 className="font-bold text-2xl m-10">PREMIUM</h3>
                <h5 className="mb-5 text-gray-500 text-xl">Organize across all <br></br>
                apps by hand</h5>
                <div className="flex text-[#23A6F0] text-center justify-center m-10">
                <h2 className=" font-bold text-5xl m-2">19.99</h2>
                 <ul className="m-2">
                    <li className="mr-[100%] font-bold text-2xl">$</li>
                    <li className="text-[#8EC2F2] mt-2">Per Month</li>
                 </ul>
                </div>
                <h6 className="flex gap-2 justify-center"><FaCheckCircle className="text-[#2DC071] bg-white h-[25px] w-[25px]"/>
                Unlimited product updates
                </h6>
               
            </div>
        </div>
        </div>
    )
}