import { FaPlay } from "react-icons/fa";

export default function Reviews(){

    return(
        <>
      <div className="flex h-[264px] w-full justify-center gap-40 text-center text-gray-700">
    <div className="">
        <h1 className="font-bold text-6xl mb-5">15K</h1>
        <h5>Happy Customers</h5>
    </div>
    <div>
        <h1 className="font-bold text-6xl mb-5">150K</h1>
        <h5>Monthly Visitors</h5>
    </div>
    <div>
        <h1 className="font-bold text-6xl mb-5">15</h1>
        <h5>Countries  Worldwide</h5>
    </div>
    <div>
        <h1 className="font-bold text-6xl mb-5">100+</h1>
        <h5>Top Partners</h5>
    </div>
    
      </div>
    <div className="h-[540px] w-[989px] rounded-2xl flex flex-wrap justify-center items-center mx-auto" style={{backgroundImage:'url("/media bg-cover (5).png")'}}>
        <button className="h-[92px] w-[92px] text-white bg-[#23A6F0] rounded-full flex justify-center items-center text-center"><FaPlay className="h-[23px] w-[21px] justify-center items-center"/></button>
      </div>
      </>
    )
}