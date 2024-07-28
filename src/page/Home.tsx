import { CardHoverEffectDemo } from "../Components/CardHoverEffectDemo";
import Card from "../Components/Home/Card";
import HeroSection from "../Components/Home/HeroSection";
import HomePage from "../Components/Home/HomePage";
import Recovery from "../Components/Home/Recovery";


const Home = () => {
  return (
    <div className="bg-[#b7ded8] text-black w-[100vw]">
      <HomePage  />
      <HeroSection />
      <CardHoverEffectDemo />
      <Card />
      <Recovery />
    </div>
  )
};

export default Home
