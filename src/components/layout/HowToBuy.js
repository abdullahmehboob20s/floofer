import HowToBuyCard from "components/UI/HowToBuyCard";
import HowToBuySideBySideSection from "components/UI/HowToBuySideBySideSection";
import React from "react";

function HowToBuy() {
  return (
    <div className="py-14 lg:py-20 bg-white z-10 relative">
      <div className="container-wrapper">
        <h1 className="text-center font-marsmelloe text-3xl lg:text-4xl mb-14 lg:mb-20">
          HOW TO BUY
        </h1>

        <div className="space-y-16">
          <HowToBuySideBySideSection className="gap-10 lg:gap-0">
            <HowToBuyCard
              desc="First you need to set up a wallet - if you’re on desktop then we
          recommend Metamask, with Trust Wallet being the recommended wallet for
          mobile users."
            />

            <div className="flex justify-center row-start-1 row-end-2 lg:row-start-auto lg:row-end-auto">
              <img
                src="images/wallets.svg"
                className="max-w-[100px] sm:max-w-[200px] w-full"
                alt=""
              />
            </div>
          </HowToBuySideBySideSection>

          <HowToBuySideBySideSection className="gap-10 lg:gap-0">
            <div></div>
            <HowToBuyCard
              desc={`You can buy $floofer using ETH on Etherium Chain. Once you've connected your wallet, hit "Buy with ETH" and specify how many $Floofer you would like to purchase. Tokens can be claimed after presale ends.`}
            />
          </HowToBuySideBySideSection>

          <HowToBuySideBySideSection className="gap-10 lg:gap-0">
            <HowToBuyCard desc='You can also buy $floofer using USDT on Etherium Chain. Simply connect your wallet, hit "Buy with USDT" and specify how many $floofer to purchase. Make sure you have enough ETH in your wallet to cover gas fees. Tokens can be claimed after presale ends.' />

            <div className="flex justify-center row-start-1 row-end-2 lg:row-start-auto lg:row-end-auto">
              <img
                src="images/dog-circle.png"
                className="max-w-[100px] sm:max-w-[170px] w-full"
                alt=""
              />
            </div>
          </HowToBuySideBySideSection>
        </div>
      </div>

      <img
        src="images/pet-foots-pink-bg.png"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        alt=""
      />
    </div>
  );
}

export default HowToBuy;
