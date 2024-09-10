import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Details from "../components/Details";

const HomePage = () => {
  return (
    <div className="w-full bg-black">
      <div className="w-full flex px-5 lg-max-w-[1200px]">
        <Navbar />
      </div>
      <div className="w-full sm:px-16 px-6">
        <div className="w-full h-[500px] max-w-[1200px]">
          <Hero />
        </div>
      </div>
      <div className="w-full my-5 bg-yellow-300">
        <div className="w-full max-w-[1200px]">
          <Details />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
