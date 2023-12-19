'use client';

import Image from "next/image"
import CustomButton from "./CustomButton"

const Hero = () => {

    const handleScroll = () => {

    }

  return (
    <div className="hero">
      <div className="flex-1 pt-20 padding-x">
        <h1 className="hero__title">
          Find your fav car — quick and easy!
        </h1>

        <p className="hero__subtitle">
          A concept car rental application with advanced search and filtering options.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  )
}

export default Hero