import React from "react";

function ProductCard({ productDetail, img, title }) {
  return (
    <div className="space-y-3 sm:space-y-5">
      <p className="text-center text-shadow-black font-huglove text-2xl xl:text-3xl font-bold uppercase text-white border-text">
        {title}
      </p>

      <div className="rounded-3xl border-[4px] xl:border-[6px] border-black py-6 px-8 bg-white grid items-center sm:grid-cols-[1fr_.8fr] gap-6 sm:gap-10">
        <p className="font-marsmelloe text-sm xl:text-base text-blue-dark">
          {productDetail}
        </p>
        <img
          src={img}
          className="w-full h-[100px] sm:h-[110px] xl:h-[120px] object-contain row-start-1 row-end-2 sm:row-start-auto sm:row-end-auto"
          alt=""
        />
      </div>
    </div>
  );
}

export default ProductCard;
