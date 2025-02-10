import Footer from "../../components/footer";
import Header2 from "../about/header";
import FreeTrial from "../pricing/trial";
import Innovation from "./innovation";
import OurTeam from "./team1";

export default function Blog(){
    return(
       <div>
        <Header2/>
        <Innovation/>
        <OurTeam/>
        <FreeTrial/>
        <Footer/>
       </div>
    )
}