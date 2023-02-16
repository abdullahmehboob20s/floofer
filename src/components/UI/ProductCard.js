import React from "react";

function ProductCard({ productDetail, img, title }) {
  return (
    <div className="space-y-3 sm:space-y-5 xl:space-y-6">
      <p className="text-center text-shadow-black font-huglove text-2xl xl:text-4xl font-bold uppercase text-white border-text">
        {title}
      </p>

      <div className="rounded-3xl border-[4px] xl:border-[6px] border-black py-6 xl:py-8 px-8 xl:px-12 bg-white grid items-center sm:grid-cols-[1fr_.8fr] gap-6 sm:gap-10">
        <p className="font-marsmelloe text-sm xl:text-xl text-blue-dark">
          {productDetail}
        </p>
        <img
          src={img}
          className="w-full h-[100px] sm:h-[110px] xl:h-[180px] object-contain row-start-1 row-end-2 sm:row-start-auto sm:row-end-auto"
          alt=""
        />
      </div>
    </div>
  );
}

export default ProductCard;
