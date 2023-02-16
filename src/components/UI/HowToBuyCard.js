import React from "react";

function HowToBuyCard({ children, desc }) {
  return (
    <div className="border-[4px] xl:border-[6px] border-black py-6 xl:py-12 px-8 xl:px-10 rounded-2xl xl:rounded-[36px] bg-[rgba(255,255,255,0.71)] shadow-[4px_4px_8px_rgba(0,0,0,0.25)]">
      <p className="font-semibold text-sm xl:text-lg textblack tracking-[0.04em]">
        {desc}
      </p>
    </div>
  );
}

export default HowToBuyCard;
