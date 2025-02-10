import Link from "next/link";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Description (){
    return(
    <div>
    <ul className="flex justify-center items-center text-center text-gray-700 font-bold gap-8 mt-10 mb-10">
        <Link href="">
        <li>Description</li>
        </Link>

        <Link href="">
        <li>Additional Information</li>
        </Link>

        <Link href="">
        <li>Reviews (0) </li>
        </Link>
    </ul>

    <div className="flex gap-20 justify-center w-full mt-0">
        <div>
            <Image src="/unsplash-product-cover.png" alt="Product image" height={372} width={316}/>
        </div>
        <div className="h-[427px] w-[332px] text-gray-500 text-normal font-bold">
            <h3 className="text-gray-700 text-2xl font-bold mb-4">the quick fox jumps over </h3>
            <p className="mb-2">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>

            <p className="mb-2">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>

            <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>

        </div>
        <div className="h-[367px] w-[332px] font-bold mb-4">
            <h3 className="text-2xl text-gray-700 mb-6">the quick fox jumps over </h3>
            <p className="flex text-gray-500 mb-4 gap-2"><MdKeyboardArrowRight className="h-[25px] w-[25px]"/>the quick fox jumps over the lazy dog
            </p>
            <p className="flex text-gray-500 mb-4 gap-2"><MdKeyboardArrowRight className="h-[25px] w-[25px]"/>the quick fox jumps over the lazy dog
            </p>
            <p className="flex text-gray-500 mb-4 gap-2"><MdKeyboardArrowRight className="h-[25px] w-[25px]"/>the quick fox jumps over the lazy dog
            </p>
            <p className="flex text-gray-500 mb-4 gap-2"><MdKeyboardArrowRight className="h-[25px] w-[25px]"/>the quick fox jumps over the lazy dog
            </p>

            <h3 className="text-2xl text-gray-700 mb-6">the quick fox jumps over </h3>

            <p className="flex text-gray-500 mb-4 gap-2"><MdKeyboardArrowRight className="h-[25px] w-[25px]"/>the quick fox jumps over the lazy dog
            </p>
            <p className="flex text-gray-500 mb-4 gap-2"><MdKeyboardArrowRight className="h-[25px] w-[25px]"/>the quick fox jumps over the lazy dog
            </p>
            <p className="flex text-gray-500 mb-4 gap-2"><MdKeyboardArrowRight className="h-[25px] w-[25px]"/>the quick fox jumps over the lazy dog
            </p>
           

        </div>
    </div>

    </div>
    )
}