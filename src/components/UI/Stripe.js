import React from "react";

function Stripe({ borderBottom = false }) {
  return (
    <div
      className={`h-[24px] lg:h-[30px] xl:h-[40px] bg-black shadow-stripe w-full rotate-[-1deg] relative z-[100] ${
        borderBottom ? "border-b-[4px]" : "border-t-[4px]"
      } border-white`}
    ></div>
  );
}

export default Stripe;
