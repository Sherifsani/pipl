/* eslint-disable no-unused-vars */
import React from "react";
import CtaButton from "./CtaButton";

const Hero = () => {
  return (
    <section className="flex flex-col gap-7 p-3 mx-auto mx-w-[1200px] min-h-[80vh] ">
      <h1 className="text-[12vw]">
        Your Ultimate
        <br /> Fashion Destination
      </h1>
      <p className="text-xl leading-6">
        Discover trends, embrace elegance, and redefine your wardrobe with us.
      </p>
    <h1>
    Be your own hero at pipl</h1>

      <CtaButton text={"Explore Worldwide"} />
    </section>
  );
};

export default Hero;
