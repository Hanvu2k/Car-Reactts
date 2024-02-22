"use client";

import React from "react";
import Image from "next/image";
import { CustomButton } from "@/components";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h2 className="hero__title">
          Finde book or rent a car - quicky and easily!
        </h2>

        <p className="hero__subtitle">
          Streamline your car rental experience width our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyle="bg-primary-blue text-white mt-10 rounded-full"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
