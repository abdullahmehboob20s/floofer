import Button from "components/UI/Button";
import React from "react";

function Hero() {
  return (
    <div className="overflow-hidden min-h-[calc(100vh-var(--header-height))] bg-primary-2 flex items-center relative z-50">
      <div className="container-wrapper">
        <div className="mb-4">
          <h1 className="font-huglove text-[128px] leading-[1] text-brown titles-shadow">
            FLooFER
          </h1>
          <p className="font-huglove text-[40px] titles-shadow">
            tag line will come here
          </p>
        </div>

        <p className="font-semibold w-[50%] text-blue-text text-xl lh-1_6 mb-10">
          Floofer is a cryptocurrency which allows all dog lovers to swipe right
          on their Floof’s potential love and gain utilitarian benefits in the
          real world.{" "}
          <a href="/" className="text-blue-link">
            Read more
          </a>
        </p>

        <div className="flex items-center space-x-4">
          <Button>Join Community</Button>
          <Button>Get your Floofer </Button>
        </div>
      </div>

      <img
        src="images/hero-blob.png"
        className="absolute top-0 right-[0%] h-[120%] w-[44%] -z-10 pointer-events-none select-none"
        alt=""
      />

      <img
        src="images/hero-dog.svg"
        className="w-[44%] absolute top-1/2 right-4 -translate-y-1/2 z-[-1] pointer-events-none select-none"
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
