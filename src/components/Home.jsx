import React from "react";
import Marquee from "./home/Marquee";
import Hero from "./home/Hero";
import HomeAboutMe from "./home/homeAboutMe";
import AreaOfExpertise from "./area/AreaOfExpertise";
import Footer from "./layout/Footer";

function Home() {
  return (
    <div className="w-full bg-[#f5f3ee] dark:bg-[#080b0f]">
      <Hero />
      <Marquee />
      <HomeAboutMe /> 
      <AreaOfExpertise /> 
      {/* Projects section intentionally hidden per request. */}
      <Footer />    
    </div>
  );
}

export default Home;
