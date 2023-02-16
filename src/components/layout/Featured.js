import React from "react";

const featuredImgs = [
  { img: "images/mint.svg" },
  { img: "images/finaria.svg" },
  { img: "images/krypto.svg" },
  { img: "images/coin.svg" },
  { img: "images/b2c.svg" },
  { img: "images/theeco.svg" },
  { img: "images/crypto.svg" },
];

function Featured() {
  return (
    <div className="py-12 lg:py-14 xl:py-20 relative z-10">
      <div className="container-wrapper">
        <h1 className="text-center font-huglove text-3xl lg:text-4xl xl:text-6xl text-shadow-black-sharp text-[#D8FAFF] mb-10 xl:mb-14">
          FEATURED IN
        </h1>

        <div className="flex items-center justify-center flex-wrap -mx-3 -my-3">
          {featuredImgs.map((item, i) => (
            <img
              src={item.img}
              key={i}
              alt=""
              className="border-2 border-transparent mx-3 my-3 h-[30px] lg:h-[40px] xl:h-[60px]"
            />
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(0,0,0,0.57)]"></div>
    </div>
  );
}

export default Featured;
