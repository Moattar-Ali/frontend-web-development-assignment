

export default function Hero(){
    return(
        <>
        <div className="h-[716px] w-[1439px] mx-auto relative px-40 py-40" style={{backgroundImage:'url("/hero-1.jpg")'}}>
        <div className="h-[330px] w-[590px] flex flex-col text-white font-bold gap-8">
        <h5>SUMMER 2020</h5>
        <h1 className="text-5xl">NEW COLLECTION</h1>
        <h4 className="font-normal text-xl">We know how large objects will act,
            <br></br> 
        but things on a small scale.</h4>
        <button className="text-white font-bold bg-[#2DC071] h-[62px] w-[220px] text-2xl rounded-md">SHOP NOW</button>
        </div>
        </div>
    
        </>
    )
}