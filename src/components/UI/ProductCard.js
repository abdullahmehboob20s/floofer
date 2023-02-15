import React from "react";

function ProductCard({ productDetail, img, title }) {
  return (
    <div className="space-y-6">
      <p className="text-center font-huglove text-4xl font-bold uppercase text-white border-text">
        {title}
      </p>

      <div className="rounded-3xl border-[6px] border-black py-8 px-12 bg-white grid items-center grid-cols-[1fr_.8fr] gap-10">
        <p className="font-marsmelloe text-xl text-blue-dark">
          {productDetail}
        </p>
        <img src={img} className="w-full h-[180px] object-contain" alt="" />
      </div>
    </div>
  );
}

export default ProductCard;
