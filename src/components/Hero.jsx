import React from "react";
import { Link } from "react-router-dom";
import * as icon from "react-feather";
const Hero = () => {
  return (
    <section className="w-full bg-black flex flex-col text-center items-center">
      <div className="text-white">
        <h1 className="text-bold text-[75px]">WORK WITH</h1>
        <h1 className="text-[75px] text-bold text-red-200">PROFESSIONALS</h1>
        <p className="text-normal max-w-[800px] my-[50px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
          dolore, iusto possimus obcaecati blanditiis, repellat ea id similique!
          Temporibus ipsa perferendis veniam ipsam?
        </p>
        <div className="flex justify-center items-center">
          <Link className="bg-yellow-300 p-1 px-4 h-15 w-70 rounded-2xl flex justify center items-center">
            <p className="text-black text-[15px] text-bold">START NOW</p>
          </Link>
          <Link className="bg-black p-1 px-4 rounded-2xl flex justify center items-center">
            <p className="text-white text-[15px] text-bold">LEARN MORE</p>
          </Link>
        </div>
        <div className="w-full flex justify-center my-5">
          <div className="p-3">
            <icon.ArrowLeft size={20} color="white" />
          </div>
          <div className="p-3">
            <icon.ArrowRight size={20} color="white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
