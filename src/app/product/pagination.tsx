import Link from "next/link";

 export default function Pagination(){
    return(
        <div className="w-full justify-center items-center text-center">
        <ul className="flex h-[74px] w-[313px] border shadow-md rounded-md justify-center items-center text-center font-bold ml-[700px] mb-20">
            <Link href="/product">
            <li className="border h-[74px] w-[84px] text-gray-300 items-center bg-gray-100 justify-center text-center pt-6">First</li>
            </Link>

            <Link href="/product1">
            <li className="border h-[74px] w-[49px] text-[#23A6F0] text-center items-center pt-6">1</li>
            </Link>

            <Link href="">
            <li className="border h-[74px] w-[49px] text-white bg-[#23A6F0] items-center text-center pt-6">2</li>
            </Link>

            <Link href="">
            <li className="border h-[74px] w-[49px] text-[#23A6F0] items-center text-center pt-6">3</li>
            </Link>

            <Link href="">
            <li className="border h-[74px] w-[84px] text-[#23A6F0] items-center text-center pt-6">Next</li>
            </Link>
        </ul>
        </div>
    )
 }