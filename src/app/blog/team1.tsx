import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function OurTeam(){
    const teamImages = [
        "/media.png",
        "/team-1-user-2.png",
        "/team-1-user-3.png",
        "/media (1).png",
        "/team-1-user-2 (1).png",
        "/team-1-user-3 (1).png",
        "/media (2).png",
        "/media (3).png",
        "/media (4).png",
    ]
    return(
        <div className="w-full mt-20 mb-20 mx-auto justify-center">
            <h2 className="justify-center text-center items-center mb-20 text-4xl text-gray-700 font-bold">Meet Our Team</h2>
            <div className="flex flex-wrap items-center gap-10 justify-center">
                {teamImages.map((image, index)=>
                (<div key={index}>
                    <Image src={image} alt={`team image ${index+1}`} height={231} width={316}/>
                    <div className="items-center justify-center text-center">
                    <h5 className="font-bold text-gray-700 mt-8">Username</h5>
                    <h6 className="font-bold text-gray-500 mt-2">Profession</h6>
                    <ul className="flex justify-center items-center text-center gap-4 mt-4">
                        <Link href="">
                        <li><FaFacebook className="h-[24px] w-[24px] text-blue-400"/></li></Link>

                        <Link href="">
                        <li><FaInstagram className="h-[24px] w-[24px] text-blue-400"/></li></Link>

                        <Link href="">
                        <li> <FaTwitter className="h-[24px] w-[24px] text-blue-400"/></li></Link>
                    </ul>
                    </div>
                    </div>))}
            </div>
        </div>
    )
}