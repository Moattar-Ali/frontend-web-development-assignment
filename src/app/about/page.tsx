import Footer from "../../components/footer";
import CompanyAbout from "./company";
import Reviews from "./review";
import TeamAbout from "./teams";
import BigCompany from "./bigcompany";
import HeroTag from "./tag";
import Brands from "../product/brands";
import Header2 from "./header";

export default function About(){
    return(
       <div>
       <Header2/>
        <CompanyAbout/>
        <Reviews/>
        <TeamAbout/>
        <BigCompany/>
        <Brands/>
        <HeroTag/>
        <Footer/>
       </div>
    )
}
