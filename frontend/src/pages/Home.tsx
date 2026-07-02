import Ctabanner from "../components/Ctabanner"
import Features from "../components/Features"
import Hero from "../components/Hero"
import Pricing from "../components/Pricing"



const Home = () => {
  return (
    <div className="bg-page">
       <Hero/>
       <Features/>
       <Pricing />
       <Ctabanner/>
    </div>
  )
}

export default Home