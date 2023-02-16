import PreSaleBox from "components/UI/PreSaleBox";
import React from "react";
import Featured from "./Featured";

const Card = ({ title, subtitle, className }) => {
  return (
    <div
      className={`bg-white border-4 border-black rounded-md py-3 px-4 text-center ${className}`}
    >
      <p className="text-center text-sm lg:text-base font-bold font-poppins mb-1">
        {title}
      </p>
      <p className="text-center text-xs lg:text-sm font-bold font-poppins">
        {subtitle}
      </p>
    </div>
  );
};

function PreSale() {
  return (
    <div
      className="bg-blue-presale relative z-10"
      style={{
        clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 76px))`,
      }}
    >
      <Featured />

      <div className="pb-36 lg:pb-48 pt-8 lg:pt-16 xl:pt-24">
        <div className="container-wrapper">
          <main className="grid lg:grid-cols-2 items-center gap-12 sm:gap-16 lg:gap-20">
            <div>
              <img
                src="images/rocket.png"
                className="w-[100%] max-w-[200px] lg:max-w-none lg:w-[40%] xl:w-1/2 mx-auto"
                alt=""
              />

              <div className="grid grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-4 mb-6">
                <Card title="1,000,000,000" subtitle="Token Supply" />
                <Card title="300,000,000" subtitle="Available for pre-sale" />
                <Card
                  title="ERC20"
                  subtitle="Token Type"
                  className="col-span-2 xl:col-span-1"
                />
              </div>

              <p className="text-white font-marsmelloe text-base xl:text-lg text-shadow-black">
                Be among the first to own Floofer tokens and get access to
                exclusive perks and discounts.
              </p>
            </div>

            <PreSaleBox />
          </main>
        </div>

        <img
          src="images/pre-sale-bg.png"
          className="absolute top-0 left-0 w-full h-full -z-10 object-cover"
          alt=""
        />
      </div>
    </div>
  );
}

export default PreSale;
