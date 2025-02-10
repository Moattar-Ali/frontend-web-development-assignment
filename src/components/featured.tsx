import Image from "next/image";
import React from "react";
import { AiFillPicture } from "react-icons/ai";
import { CgAlarm } from "react-icons/cg";
import { SlArrowRight } from "react-icons/sl";

export default function FeaturedPost(){
    const posts= [{
        id:0,
        image: "/unsplash_hHdHCfAifHU.png",
        title:"Loudest à la Madison #1 (L'intégral)",
       description:
        "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
       date: '22 April 2021',
       comments: '10 comments',
    
        },

        {
        id:1,
        image:"/unsplash_tVEqStC2uz8.png",
        title:"Loudest à la Madison #1 (L'intégral)",
        description:
         "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
        date: '22 April 2021',
        comments: '10 comments',
     
    
        },

        {
        id:2,
        image:"/unsplash_dEGu-oCuB1Y.png",
        title:"Loudest à la Madison #1 (L'intégral)",
        description:
         "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
        date: '22 April 2021',
        comments: '10 comments', 
    
        },

    ];
return(
    <>
    <div className="h-[1044px] w-[1050px] mx-auto gap-8">
        <div className="h-[134px] w-[691px] gap-[10px] items-center text-center m-40">
            <h6 className="text-[#23A6F0] font-bold text-xl">Practice Advice</h6>
            <h2 className="text-6xl font-bold m-8">Featured Posts</h2>
            <p className="text-xl text-gray-500 font-bold">Problems trying to resolve the conflict between 
                <br></br>
                the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
        <div className="h-[606px] w-[1045px] flex gap-3">
            {posts.map((post)=>(
                <div key={post.id} className="border shadow-sm pr-5 pl-5 pb-5">
                    <div className=" justify-center">
                <Image src={post.image} alt={post.title} height={300} width={350} className=""/>
                <span className="text-sm font-bold relative bg-red-500 text-white absolute top-[-240px] pr-3 pl-3 pt-1 pb-1 m-2 w-[48px]">NEW</span>
                
            </div>
            
            <div>
                <p className="text-gray-500 p-2">Google . Trending . New</p>
                <h3 className="text-2xl p-2">{post.title}</h3>
                    <p className="px-2 text-xl text-gray-500">{post.description}</p>
                    <div className="flex justify-between">
                        <span className="p-2 flex text-gray-500"><CgAlarm className="h-[16px] w-[16px] text-blue-500 mt-1 mr-1"/>{post.date}</span>
                        <span className="p-2 flex text-gray-500"><AiFillPicture className="h-[16px] w-[16px] mt-1 mr-1"/>{post.comments}</span>
                        </div>
                        
                        <a>
                         <span className="font-bold text-gray-500 flex gap-2 p-2">Learn More<SlArrowRight className="h-[16px] w-[16px] mt-1 text-blue-500"/></span>
                        </a>
                </div>
            </div>
            
            ))}
        </div>
    </div>
    </>
)
}