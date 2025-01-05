/* eslint-disable no-unused-vars */
import React from "react";
import CtaButton from "./CtaButton";

const Hero = () => {
  return (
    <section className="flex h-[100vh] flex-col items-start justify-center pt-[100px] pb-[10px] gap-7 px-5 mx-auto mx-w-[1400px]">
      <h1 className="hero-head text-[15.3vw] sm:text-[60px] lg:text-[72px] xl:text-[112px]  tracking-[-0.9px] lg:tracking-[-1.68px]">
        Your Ultimate
        <br className="hidden xl:block" /> Fashion Destination
      </h1>
      <p className="hero-text max-w-[400px]">
        Discover trends, embrace elegance, and redefine your wardrobe with us.
      </p>

      <CtaButton text={"Explore Worldwide"} />
    </section>
  );
};

export default Hero;
