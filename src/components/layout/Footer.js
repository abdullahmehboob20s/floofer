import React from "react";

function Footer() {
  return (
    <fotter className="relative z-10 text-white bg-footer">
      <div className="container-wrapper pt-20 pb-10">
        <main className="flex items-stretch space-x-24 mb-20">
          <div className="flex space-x-10 flex-1">
            <div>
              <img
                src="images/cropped-logo.png"
                className="min-w-[80px]"
                alt=""
              />
            </div>
            <div>
              <div className="mb-5">
                <h1 className="font-marsmelloe text-primary text-4xl uppercase">
                  ABOUT FLOOFER
                </h1>
              </div>

              <p className="font-marsmelloe text-xl font-normal text-text-light">
                We are encouraging new talented people to join our community, as
                this is the most important driving force behind Floofer’s
                success. Being in the crypto space is exciting, and there is a
                lot of potential here.
              </p>
            </div>
          </div>

          <div className="w-[4px] bg-white border-2"></div>

          <div className="flex-1">
            <div className="mb-5">
              <h1 className="font-marsmelloe text-primary text-4xl uppercase">
                LINKS
              </h1>
            </div>

            <div className="flex space-x-20">
              <div className="space-y-3">
                <a
                  href="/"
                  className="text-text-light font-marsmelloe text-xl block w-fit"
                >
                  HOME
                </a>
                <a
                  href="/"
                  className="text-text-light font-marsmelloe text-xl block w-fit"
                >
                  PRESALE
                </a>
                <a
                  href="/"
                  className="text-text-light font-marsmelloe text-xl block w-fit"
                >
                  HOW TO BUY
                </a>
                <a
                  href="/"
                  className="text-text-light font-marsmelloe text-xl block w-fit"
                >
                  ROADMAP
                </a>
                <a
                  href="/"
                  className="text-text-light font-marsmelloe text-xl block w-fit"
                >
                  FEATURES
                </a>
              </div>
              <div className="space-y-3">
                <a
                  href="/"
                  className="text-text-light font-marsmelloe text-xl block w-fit"
                >
                  FLOOFYNOMICS
                </a>
                <a
                  href="/"
                  className="text-text-light font-marsmelloe text-xl block w-fit"
                >
                  TEAM
                </a>

                <a
                  href="/"
                  className="text-text-light font-marsmelloe text-xl block w-fit"
                >
                  COMMUNITY
                </a>

                <a
                  href="/"
                  className="text-text-light font-marsmelloe text-xl block w-fit"
                >
                  WHITEPAPER
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className="pt-6 border-t-2 border-[rgba(255,255,255,.6)]">
          <p className="text-center text-text-light text-xl font-semibold opacity-60">
            © Copyright 2023 floofer. All rights reserved.
          </p>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-footer"></div>

      <img
        src="images/bones-bg.png"
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
        alt=""
      />
    </fotter>
  );
}

export default Footer;
