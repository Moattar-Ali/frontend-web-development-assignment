import Bestseller from "../components/bestseller";
import Editor from "../components/editors";
import FeaturedPost from "../components/featured";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import Hero1 from "../components/hero1";
import Hero2 from "../components/hero2";


export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Editor/>
      <Bestseller/>
      <Hero1/>
      <Hero2/>
      <FeaturedPost/>
      <Footer/>
    </div>
  )
}
