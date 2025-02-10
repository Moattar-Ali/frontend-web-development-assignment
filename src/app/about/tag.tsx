import Image from "next/image";

export default function HeroTag (){
    return(
        <div className="flex mx-60 mt-40">
            <div className="h-[615px] w-[850px] bg-blue-500 text-white justify-center items-center p-40">
                <h5 className="font-bold mb-10">WORK WITH US</h5>
                <h2 className="font-bold text-5xl mb-10">Now Let’s grow Yours</h2>
                <p>The gradual accumulation of information about atomic and <br></br> small-scale behavior during the first quarter of the 20th </p>
                <button className="h-[52px] w-[132px] border rounded-md font-bold mt-10">Button</button>
            </div>
            <div>
                <Image src="/unsplash_vjMgqUkS8q8.png" alt="image" height={640} width={590}/>
            </div>
        </div>
    )
}