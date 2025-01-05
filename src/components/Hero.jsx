/* eslint-disable no-unused-vars */
import React from "react";
import CtaButton from "./CtaButton";

const Hero = () => {
  return (
    <section className="flex h-[100vh] flex-col pt-[80px] pb-[30px] gap-7 px-5 justify-end mx-auto mx-w-[1400px] border-b">
      <h1 className="hero-head text-[15.3vw] leading-[60px] tracking-[-0.9px]">
        Your Ultimate Fashion Destination
      </h1>
      <p className="hero-text">
        Discover trends, embrace elegance, and redefine your wardrobe with us.
      </p>

      <CtaButton text={"Explore Worldwide"} />
    </section>
  );
};

export default Hero;
