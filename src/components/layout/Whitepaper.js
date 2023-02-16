import WhitepaperCard from "components/UI/WhitepaperCard";
import React from "react";

function Whitepaper() {
  return (
    <>
      <div className="py-16 md:py-20 xl:py-32 bg-blue-sky">
        <div className="container-wrapper grid items-center lg:grid-cols-2 gap-10 lg:gap-20">
          <WhitepaperCard />

          <div className="flex justify-center row-start-1 row-end-2 lg:row-start-auto lg:row-end-auto">
            <img
              src="images/cat-reading.png"
              className="max-w-[260px] lg:max-w-[360px] w-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Whitepaper;
