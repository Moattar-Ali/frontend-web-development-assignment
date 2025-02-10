/* eslint-disable react/no-unescaped-entities */
import { BsEnvelope } from "react-icons/bs";
import { IoCallOutline, IoLocationSharp } from "react-icons/io5";
import { PiArrowBendRightDownLight } from "react-icons/pi";

export default function SmallBusiness(){
    return(
        <div>
            <div className="text-center font-bold items-center justify-center text-gray-800">
                <h6>VISIT OUR OFFICE</h6>
                <h2 className="text-5xl mt-5">We help small businesses 
                    <br></br>
                with big ideas</h2>
                <div className="flex justify-center items-center mt-40 font-bold gap-20">
                    <div className="h-[403px] w-[328px]">
                        <IoCallOutline className="h-[72px] w-[72px] text-[#23A6F0] font-bold items-center justify-center text-center ml-[40%] mt-20"/>
                        <h6 className="mt-10 text-gray-800">georgia.young@example.com</h6>
                        <h6 className="mt-2 text-gray-800">georgia.young@ple.com</h6>
                        <h5 className="text-gray-800 mt-4">Get Support</h5>
                        <button className="text-blue-300 mt-4 rounded-full border border-blue-300 h-[54px] w-[189px]">Submit Request</button>
                      
                    </div>
                    <div className="bg-[#252B42] text-white h-[403px] w-[328px]">
                        <IoLocationSharp className="h-[72px] w-[72px] text-[#23A6F0] font-bold items-center justify-center text-center ml-[40%] mt-20"/>
                        <h6 className="mt-10">georgia.young@example.com</h6>
                        <h6 className="mt-2">georgia.young@ple.com</h6>
                        <h5 className="mt-4">Get Support</h5>
                        <button className="text-blue-300 mt-4 rounded-full border border-blue-300 h-[54px] w-[189px]">Submit Request</button>
                      
                    </div>
                   
                    <div className="h-[403px] w-[328px]">
                        <BsEnvelope className="h-[72px] w-[72px] text-[#23A6F0] font-bold items-center justify-center text-center ml-[40%] mt-20"/>
                        <h6 className="mt-10 text-gray-800">georgia.young@example.com</h6>
                        <h6 className="mt-2 text-gray-800">georgia.young@ple.com</h6>
                        <h5 className="text-gray-800 mt-4">Get Support</h5>
                        <button className="text-blue-300 mt-4 rounded-full border border-blue-300 h-[54px] w-[189px]">Submit Request</button>
                      
                    </div>
                   
                </div>
            </div>
            <div className="font-bold text-gray-800 items-center text-center justify-center mt-10">
            <PiArrowBendRightDownLight className="h-[72px] w-[72px] text-[#23A6F0] ml-[48%] mt-20 mb-5"/>
                <h5>WE Can't WAIT TO MEET YOU</h5>
                <h1 className="mt-5 mb-10 text-6xl">Let’s Talk</h1>
                <button className="h-[52px] w-[186px] bg-[#23A6F0] text-white font bold rounded-md">Try it free now</button>
            </div>
        </div>
    )
}