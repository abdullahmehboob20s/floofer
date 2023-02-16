import React from "react";

function Whitepaper() {
  return (
    <>
      <div className="h-[20px] bg-black"></div>

      <div className="py-12 md:py-16 xl:py-20 bg-blue-sky border-t-8 border-b-8 border-white">
        <div className="container-wrapper grid items-center lg:grid-cols-2 gap-10 lg:gap-20">
          <main className="bg-button p-[6px] md:p-[8px] rounded-[40px]">
            <div className="rounded-[40px] bg-[rgba(255,255,255,0.8)] py-10 xl:py-14 px-10 xl:px-16">
              <p className="text-blue-dark font-huglove text-center mb-5 sm:mb-6 text-4xl xl:text-5xl">
                WHITEPAPER
              </p>

              <p className="text-sm sm:text-base xl:text-xl mb-8 sm:mb-10 text-center">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum
              </p>

              <button className="bg-button w-full py-2 xl:py-4 text-sm sm:text-base xl:text-2xl font-semibold text-white uppercase rounded-full">
                DOWNLOAD
              </button>
            </div>
          </main>

          <div className="flex justify-center row-start-1 row-end-2 lg:row-start-auto lg:row-end-auto">
            <img
              src="images/cat-reading.png"
              className="max-w-[260px] lg:max-w-[360px] xl:max-w-[430px] w-full"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="h-[20px] bg-black"></div>
    </>
  );
}

export default Whitepaper;
