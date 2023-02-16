import React from "react";

function Whitepaper() {
  return (
    <>
      <div className="py-16 md:py-20 xl:py-28 bg-blue-sky">
        <div className="container-wrapper grid items-center lg:grid-cols-2 gap-10 lg:gap-20">
          <main className="bg-button p-[6px] md:p-[8px] rounded-[40px]">
            <div className="rounded-[40px] bg-[rgba(255,255,255,0.8)] py-10 px-10">
              <p className="text-blue-dark font-huglove text-center mb-5 sm:mb-6 text-3xl sm:text-5xl">
                WHITEPAPER
              </p>

              <p className="text-xs sm:text-sm lg:text-base xl:text-lg mb-8 sm:mb-10 text-center">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum
              </p>

              <button className="bg-button w-full py-2 text-sm sm:text-base font-semibold text-white uppercase rounded-full">
                DOWNLOAD
              </button>
            </div>
          </main>

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
