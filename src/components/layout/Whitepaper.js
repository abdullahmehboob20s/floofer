import React from "react";

function Whitepaper() {
  return (
    <>
      <div className="h-[20px] bg-black"></div>

      <div className="py-20 bg-blue-sky border-t-8 border-b-8 border-white">
        <div className="container-wrapper grid items-center grid-cols-2 gap-20">
          <main className="bg-button p-[8px] rounded-[40px]">
            <div className="rounded-[40px] bg-[rgba(255,255,255,0.8)] py-14 px-16">
              <p className="text-blue-dark font-huglove text-center mb-6 text-5xl">
                WHITEPAPER
              </p>

              <p className="text-xl mb-10 text-center">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum
              </p>

              <button className="bg-button w-full py-4 text-2xl font-semibold text-white uppercase rounded-full">
                DOWNLOAD
              </button>
            </div>
          </main>

          <div className="flex justify-center">
            <img
              src="images/cat-reading.png"
              className="max-w-[430px] w-full"
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
