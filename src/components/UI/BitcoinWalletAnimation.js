import React from "react";

function BitcoinWalletAnimation({ className }) {
  return (
    <div className={`relative z-10 ${className}`}>
      <img
        src="images/metamask-fox.png"
        className="absolute bottom-[48%] right-[55%] -z-10 w-[44%]"
        alt=""
      />
      <img src="images/bitcoin-wallet.gif" className="w-full z-20" alt="" />
      <img
        src="images/twt.png"
        className="absolute top-[60%] left-[60%] -z-10 w-[32%]"
        alt=""
      />
    </div>
  );
}

export default BitcoinWalletAnimation;
