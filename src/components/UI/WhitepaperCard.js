import React from "react";

function WhitepaperCard() {
  return (
    <main className="bg-button p-[6px] md:p-[8px] rounded-[40px]">
      <div className="rounded-[40px] bg-[rgba(255,255,255,0.8)] pt-7 pb-7 lg:pt-12 lg:pb-16 px-6 lg:px-10">
        <p className="text-blue-dark font-huglove text-center mb-5 sm:mb-8 text-3xl sm:text-5xl">
          WHITEPAPER
        </p>

        <p className="text-xs sm:text-sm lg:text-base xl:text-lg mb-8 sm:mb-14 text-center">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum
        </p>

        <button className="bg-button w-full py-2 text-sm sm:text-base xl:text-lg font-semibold text-white uppercase rounded-full">
          DOWNLOAD
        </button>
      </div>
    </main>
  );
}

export default WhitepaperCard;
