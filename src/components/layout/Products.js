import ProductCard from "components/UI/ProductCard";
import React from "react";

function Products() {
  return (
    <div
      className="pt-28 lg:pt-44 pb-16 sm:pb-20 xl:pb-28 relative z-10"
      style={{
        clipPath: "polygon(0 0, 100% calc(0% + 76px), 100% 100%, 0 100%)",
      }}
    >
      <div className="container-wrapper">
        <h1 className="text-center font-huglove text-4xl xl:text-5xl mb-10 sm:mb-16 xl:mb-20">
          PRoDUCTS
        </h1>

        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-10">
          <ProductCard
            title="The Love NFT"
            img="images/love-nft.png"
            productDetail="Floofer NFT collectibles are a set of unique 10000 NFTs which will be launched on our marketplace."
          />
          <ProductCard
            title="FLOOFER DATING"
            img="images/floofer-dating.png"
            productDetail="Floofer dating is the first NFT-based dog dating service, where dogs can find their match by swiping profiles"
          />
          <ProductCard
            title="Floofer MALL"
            img="images/mall.png"
            productDetail="the ultimate shopping app for dog lovers! With Floofer Mall."
          />
          <ProductCard
            title="Floofer Mini game"
            img="images/mini-game.png"
            productDetail="Floofer intends on building a simple 2D game where users can further benefit from Play to Earn models."
          />
          <ProductCard
            title="Floofer PET CARE"
            img="images/pet-care.png"
            productDetail="A range of professional pet care services."
          />
          <ProductCard
            title="Floofer STAKING"
            img="images/stakkng.png"
            productDetail="A staking program that allows users to earn rewards"
          />
        </div>
      </div>

      <img
        src="images/products-bg.png"
        className="absolute top-0 left-0 w-full h-full -z-10 object-cover"
        alt=""
      />
    </div>
  );
}

export default Products;
