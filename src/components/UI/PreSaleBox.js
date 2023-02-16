import React from "react";
import Progressbar from "./Progressbar";

function PreSaleBox() {
  return (
    <div className="bg-presale pt-12 pb-14 px-9 shadow-presale rounded-[40px] border-[8px] border-[#0B5680]">
      <p className="text-center font-marsmelloe text-shadow-black text-white text-5xl mb-9">
        PRESALE STAGE 1
      </p>

      <div className="mb-12">
        <p className="text-center text-white text-2xl font-bold mb-4">
          1 Floofer = 0.013 USDT
        </p>
        <p className="text-center text-white text-xl font-bold">
          USDT Raised $102,375.39 / $2,080,000
        </p>
      </div>

      <div className="mb-8">
        <div className="mb-3">
          <Progressbar progress={40} />
        </div>
        <p className="text-sm text-white font-open-sans font-bold">
          152,124,970 Tokens Remaining Until
        </p>
      </div>

      <div className="mb-12">
        <p className="text-center text-white text-xl font-bold mb-2">
          1 floofer = 0.0165 USDT
        </p>
        <p className="text-center text-white text-base font-bold">
          Buy before price increase!
        </p>
      </div>

      <button className="w-[80%] mx-auto py-4 rounded-full connect-wallet-shadow text-wallet-text font-marsmelloe bg-connect-wallet shadow-connect-wallet border-[3px] border-[#A514D8] text-2xl block">
        Connect Wallet
      </button>
    </div>
  );
}

export default PreSaleBox;
