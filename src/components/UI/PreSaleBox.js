import React from "react";
import Progressbar from "./Progressbar";

function PreSaleBox() {
  return (
    <div className="bg-presale pt-5 sm:pt-8 pb-7 sm:pb-10 px-6 sm:px-9 shadow-presale rounded-3xl sm:rounded-[40px] border-[8px] border-[#0B5680]">
      <p className="text-center font-marsmelloe text-shadow-black text-white text-2xl xl:text-3xl mb-6">
        PRESALE STAGE 1
      </p>

      <div className="mb-10">
        <p className="text-center text-white text-base font-bold mb-3">
          1 Floofer = 0.013 USDT
        </p>
        <p className="text-center text-white text-sm font-bold">
          USDT Raised $102,375.39 / $2,080,000
        </p>
      </div>

      <div className="mb-8">
        <div className="mb-3">
          <Progressbar progress={40} />
        </div>
        <p className="text-sm text-center text-white font-open-sans font-bold">
          152,124,970 Tokens Remaining Until
        </p>
      </div>

      <div className="mb-8">
        <p className="text-center text-white text-base font-bold mb-2">
          1 floofer = 0.0165 USDT
        </p>
        <p className="text-center text-white text-sm font-bold">
          Buy before price increase!
        </p>
      </div>

      <button className="w-full sm:w-[80%] mx-auto py-2 rounded-full connect-wallet-shadow text-wallet-text bg-connect-wallet shadow-connect-wallet border-[3px] border-[#A514D8] text-sm sm:text-base block">
        <span className="font-marsmelloe pt-[.2em] inline-block">
          Connect Wallet
        </span>
      </button>
    </div>
  );
}

export default PreSaleBox;
