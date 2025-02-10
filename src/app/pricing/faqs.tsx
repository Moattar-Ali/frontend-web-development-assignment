/* eslint-disable react/jsx-key */
import { SlArrowRight } from "react-icons/sl";

type IData = {

    title:string;
    description:string;

    
}

export default function FAQs(){
 const iData: IData[] = [{
    title: "the quick fox jumps over the lazy dog",
    description:`Met minim Mollie non desert Alamo est sit cliquey 
                 dolor do met sent. RELIT official consequent door ENIM 
                 RELIT Mollie. Excitation venial consequent sent 
                 nostrum met`
 },
 {
    title: "the quick fox jumps over the lazy dog",
    description:`Met minim Mollie non desert Alamo est sit cliquey 
                 dolor do met sent. RELIT official consequent door ENIM 
                 RELIT Mollie. Excitation venial consequent sent 
                 nostrum met`
 },
 {
    title: "the quick fox jumps over the lazy dog",
    description:`Met minim Mollie non desert Alamo est sit cliquey 
                 dolor do met sent. RELIT official consequent door ENIM 
                 RELIT Mollie. Excitation venial consequent sent 
                 nostrum met`
 },
 {
    title: "the quick fox jumps over the lazy dog",
    description:`Met minim Mollie non desert Alamo est sit cliquey 
                 dolor do met sent. RELIT official consequent door ENIM 
                 RELIT Mollie. Excitation venial consequent sent 
                 nostrum met`
 },
 {
    title: "the quick fox jumps over the lazy dog",
    description:`Met minim Mollie non desert Alamo est sit cliquey 
                 dolor do met sent. RELIT official consequent door ENIM 
                 RELIT Mollie. Excitation venial consequent sent 
                 nostrum met`
 },
 {
    title: "the quick fox jumps over the lazy dog",
    description:`Met minim Mollie non desert Alamo est sit cliquey 
                 dolor do met sent. RELIT official consequent door ENIM 
                 RELIT Mollie. Excitation venial consequent sent 
                 nostrum met`
 }
 ]
    return(
        <div>
            <div className="justify-center items-center text-center m-10">
                <h2 className="font-bold text-4xl text-gray-700 mt-10">Pricing FAQs</h2>
                <h2 className="font-bold text-gray-500 mt-5">Problems trying to resolve the conflict between 
                    <br></br>
                the two major realms of Classical physics</h2>
            </div>
            
            
            <div className="flex justify-center">
            <div className="w-[1056px] h-[537px] grid grid-cols-2 mb-20 mt-20 gap-10">
                 {iData.map((IData)=>(
                    
                    <div className="h-[139px] w-full gap-[30px] mt-5">
                    <h5 className="font-bold text-2xl text-gray-700 flex gap-2 mt-10"><SlArrowRight className="h-[20px] w-[20px]"/>{IData.title}</h5>
                    <p className="text-gray-500">{IData.description}</p>
                    </div>
                 ))}
            </div>
            </div>
            <h4 className="font-bold text-center justify-center text-gray-500 mt-10">Haven’t got your answer? Contact our support</h4>
        </div>
    )
}