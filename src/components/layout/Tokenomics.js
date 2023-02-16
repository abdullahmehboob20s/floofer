import React from "react";

function Tokenomics() {
  return (
    <div className="py-14 lg:py-20 relative z-20 bg-primary-2">
      <div className="container-wrapper">
        <h1 className="text-center text-3xl lg:text-4xl xl:text-5xl text-blue-sharp font-huglove mb-10 lg:mb-20">
          FLOOFYNOMICS
        </h1>

        <img
          src="images/tokenomics-img.svg"
          className="w-full lg:w-[80%] mx-auto"
          alt=""
        />
      </div>

      <img
        src="images/tokenomics-bg.svg"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        alt=""
      />
    </div>
  );
}

export default Tokenomics;
