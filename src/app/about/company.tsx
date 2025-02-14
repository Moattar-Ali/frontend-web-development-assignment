import Image from "next/image"

export default function CompanyAbout(){
    return(
        <div>
   <div className="flex justify-center gap-20">
    <div className="h-[321px] w-[559px] mt-40">
        <h5 className="font-bold mt-10">ABOUT COMPANY</h5>
        <h1 className="font-bold text-6xl mt-10">ABOUT US</h1>
        <h4 className="text-gray-500 text-xl mt-10">We know how large objects will act, 
            <br></br>
        but things on a small scale</h4>
        <button className="bg-[#23A6F0] text-white font-bold h-[52px] w-[195px] rounded-md mt-10">Get Quote Now</button>
    </div>
    <Image src="/technology 1.png" alt="About us" height={168} width={500}/>
   </div>
   <div className="flex justify-center items-center gap-40">
   <div className="h-[188px] w-[394px]">
    <p className="text-[#E74040] font-bold">Problems trying</p>
    <h3 className="font-bold text-2xl mr-2 ml-none mt-8">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h3>
   </div>
   <div className="w-[529px] h-[188px] mt-[120px] justify-center text-gray-500">
    <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
   </div>
   </div>
  
        
        </div>
    )
}