import React from "react";

function RoadmapPopupCard({
  children,
  className = "bottom-[70%] left-[70%]",
  pointerToRight = false,
}) {
  return (
    <div
      className={`absolute w-[26vw] py-[2vw] px-[3vw] pointer-events-none opacity-0 transition-all duration-200 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 ${className} z-10`}
    >
      <div
        className={`bg-white border-2 rounded-[1vw] absolute top-0 left-0 w-full h-full -z-10`}
      ></div>

      <div
        className={`absolute rounded-tl-none rounded-tr-none w-[3vw] border-2 rounded-[.4vw] h-[3vw] bg-[white] -z-10 border-t-0 ${
          pointerToRight
            ? "top-[96.5%] right-[-.5vw] rotate-[-16deg]"
            : "top-[96.5%] left-[-.5vw] rotate-[16deg]"
        }`}
      ></div>

      {children}
    </div>
  );
}

export default RoadmapPopupCard;
