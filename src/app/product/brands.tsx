import Image from "next/image"

export default function Brands(){
    const brands = [
           
            "/Vector (5).png",
            "/Vector (4).png",
            "/Vector (3).png",
            "/Vector (2).png",
            "/Vector (1).png",
            "/Vector.png"
    ]
    return(
<div className="flex gap-20 mt-20 justify-center ml-[-100px]">

    {brands.map((image,index)=>(
        <div key={index} className="gap-2 justify-center items-center">
            <Image src={image} alt={`brands ${index+1}`} layout="responsive" height={62} width={151}/>
            </div>
    ))}

</div>
    )
}