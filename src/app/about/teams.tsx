import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

export default function TeamAbout(){
    const teamImages = [
        "/media (2).png",
        "/media.png",
        "/media (1).png"
    ]
    return(
        <div>
            <div className="items-center w-full justify-center mt-40 mb-20 text-center">
                <h2 className="font-bold text-5xl ">Meet Our Team</h2>
                <p className="text-sm mt-5 text-gray-700">Problems trying to resolve the conflict between <br></br>
                the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div className="mt-10 w-full flex justify-center items-center text-center gap-8">
                {teamImages.map((image, index)=>(
                    <div key={index}>
                    <Image src={image} alt={`media ${index+1}`} height={231} width={329} />
                    <h5 className="font-bold mt-5 text-gray-700">Username</h5>
                    <h6 className="text-gray-500 m-2 text-sm font-bold">Profession</h6>
                    <div className="text-blue-400 flex items-center text-center justify-center gap-4 mt-4">
                    <div className="h-[16px] w-[16px] flex flex-row gap-5">
                     <Link href="">
                     <FaFacebook />
                      </Link>
                    </div>
                    <div className="h-[16px] w-[16px] flex flex-row gap-5">
                    <Link href="">
                    <FaInstagram />
                    </Link>
                    </div>
                    <div className="h-[16px] w-[16px] flex flex-row gap-5">
                    <Link href="">
                    <FaTwitter/>
                    </Link>
                    </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    )
}