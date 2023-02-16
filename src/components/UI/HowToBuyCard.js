import React from "react";

function HowToBuyCard({ children, desc }) {
  return (
    <div className="border-[4px] xl:border-[6px] border-black py-6 px-8 rounded-2xl  bg-[rgba(255,255,255,0.71)] shadow-[4px_4px_8px_rgba(0,0,0,0.25)]">
      <p className="font-semibold text-xs sm:text-base textblack tracking-[0.04em]">
        {desc}
      </p>
    </div>
  );
}

export default HowToBuyCard;
