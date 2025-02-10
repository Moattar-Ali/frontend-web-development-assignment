import Header2 from "../about/header";
import FreeTrial from "./trial";
import FAQs from "./faqs";
import Brands from "../product/brands";
import SimplePricing from "./simplepricing";
import Cards from "./cards";
import Footer from "../../components/footer";

export default function Pricing(){
    return(
        <div>
            <Header2/>
            <SimplePricing/>
            <Cards/>
            <h4 className="text-gray-500 font-bold text-center text-xl mt-10">Trusted By Over 4000 Big Companies</h4>
            <Brands/>
            <FAQs/>
            <FreeTrial/>
            <Footer/>
        </div>
    )
}