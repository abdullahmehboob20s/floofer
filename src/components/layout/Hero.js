import Button from "components/UI/Button";
import React from "react";

function Hero() {
  // min-h-[calc(100vh-var(--header-height))]
  return (
    <div className="overflow-hidden pt-10 md:pt-12 lg:pt-16 xl:pt-24 pb-24 lg:pb-44 bg-primary-2 flex flex-col items-center relative z-50">
      <div className="container-wrapper text-center lg:text-left">
        <div className="mb-5 md:mb-6 lg:mb-4">
          <h1 className="font-huglove mb-3 lg:mb-0 text-5xl md:text-6xl lg:text-8xl xl:text-9xl leading-[1] text-brown titles-shadow">
            FLooFER
          </h1>
          <p className="font-huglove text-2xl md:text-3xl lg:text-4xl xl:text-[40px] titles-shadow">
            tag line will come here
          </p>
        </div>

        <p className="font-semibold text-center lg:text-left lg:w-[50%] text-blue-text text-sm sm:text-base xl:text-xl lh-1_6 mb-8 md:mb-10">
          Floofer is a cryptocurrency which allows all dog lovers to swipe right
          on their Floof’s potential love and gain utilitarian benefits in the
          real world.{" "}
          <a href="/" className="text-blue-link">
            Read more
          </a>
        </p>

        <div className="flex items-center flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
          <Button className="w-full sm:w-auto">Join Community</Button>
          <Button className="w-full sm:w-auto">Get your Floofer </Button>
        </div>
      </div>

      <img
        src="images/hero-blob.png"
        className="absolute top-[20%] lg:top-0 right-[0%] h-[100%] lg:h-[120%] w-[100%] lg:w-[44%] -z-10 pointer-events-none select-none block"
        alt=""
      />

      <img
        src="images/hero-dog.svg"
        className="w-[96%] sm:w-[80%] max-w-[600px] lg:max-w-none mx-auto lg:w-[44%] lg:absolute lg:top-1/2 right-4 lg:-translate-y-1/2 z-[-1] pointer-events-none select-none mt-16 lg:mt-0"
        alt=""
      />

      <img
        src="images/pet-foots-bg.svg"
        className="absolute top-0 left-0 w-full h-full z-[-100] object-cover pointer-events-none select-none"
        alt=""
      />
    </div>
  );
}

export default Hero;
