import React from "react";

function Stripe({ borderBottom = false }) {
  return (
    <div
      className={`h-[24px] lg:h-[30px] xl:h-[40px] bg-stripe shadow-stripe w-full ${
        borderBottom ? "border-b-[6px]" : "border-t-[6px]"
      } border-white`}
    ></div>
  );
}

export default Stripe;
