export default function Editor(){
    return(
        <>
         <div className="h-[770px] w-[1439px] mx-auto pt-20 gap-8">

<h3 className="text-center text-3xl font-bold">EDITOR’S PICK</h3>
<p className="text-center text-gray-500 mt-3 text-xl font-bold">Problems trying to resolve the conflict between </p>

<div className="flex mt-10 px-40 gap-10 text-center">

<div className="h-[500px] w-[510px] bg-cover" style={{backgroundImage:"url('/filter.png')"}}>
<div className="relative bottom-0 left-0 bg-white text-black h-[48px] w-[170px] font-bold text-normal p-2 ml-10 mt-[420px]">MEN</div>
</div>

<div className="h-[500px] w-[240px] mx-auto p-4" style={{backgroundImage:"url('/filter1.png')"}}>
<div className="bg-white text-black h-[48px] w-[136px] p-2 font-bold text-center text-normal mt-[420px]">WOMEN</div>
</div>

<div className="flex flex-col gap-4">

<div className="h-[242px] w-[240px] " style={{backgroundImage:"url('/filter2.png')"}}>
<div className="bg-white text-black h-[48px] w-[170px] p-3 font-bold text-center text-normal items-center mx-10 my-40">ACCESSORIES</div>
</div>

<div className="h-[242px] w-[240px] " style={{backgroundImage:"url('/filter3.png')"}}>
<div className="bg-white text-black h-[48px] w-[130px] p-3 font-bold text-center text-normal mx-10 my-40 mb-[-400px]">KIDS</div>
</div>
</div>
</div>

</div>


        </>
    )
}

