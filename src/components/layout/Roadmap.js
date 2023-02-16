import React from "react";

function Roadmap() {
  return (
    <div className="relative z-10">
      <h1
        className="text-center font-huglove text-[#15112C] text-4xl lg:text-5xl xl:text-7xl text-shadow-black-sharp absolute top-6 lg:top-20 left-1/2 -translate-x-1/2 z-20"
        style={{
          "-webkit-text-stroke": "2px white",
        }}
      >
        ROADMAP
      </h1>

      <img
        src="images/roadmap-bg.png"
        className="w-full pointer-events-none select-none"
        alt=""
      />
    </div>
  );
}

export default Roadmap;
