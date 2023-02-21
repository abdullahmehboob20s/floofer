import React from "react";

const Title = ({ children, className }) => {
  return (
    <h1
      className={`font-marsmelloe text-primary text-xl lg:text-2xl uppercase ${className}`}
    >
      {children}
    </h1>
  );
};

const Text = ({ Tag = "p", children, className, ...props }) => {
  return (
    <Tag
      className={`font-marsmelloe text-sm lg:text-base font-normal text-text-light ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

function Footer() {
  return (
    <footer className="relative z-10 text-white bg-footer">
      <div className="container-wrapper pt-10 md:pt-14 pb-8">
        <main className="flex flex-col md:flex-row items-stretch space-y-8 md:space-y-0 md:space-x-12 lg:space-x-24 mb-16 lg:mb-20">
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 lg:space-x-10 flex-1">
            <div>
              <img
                src="images/cropped-logo.png"
                className="max-w-[80px] md:max-w-[50px] lg:max-w-[60px]"
                alt=""
              />
            </div>
            <div>
              <div className="mb-4 lg:mb-5">
                <Title>ABOUT FLOOFER</Title>
              </div>

              <Text className="lh-1_7">
                We are encouraging new talented people to join our community, as
                this is the most important driving force behind Floofer’s
                success. Being in the crypto space is exciting, and there is a
                lot of potential here.
              </Text>
            </div>
          </div>

          <div className="bg-white border-1"></div>

          <div className="lg:flex-1">
            <div className="mb-4 lg:mb-5">
              <Title>LINKS</Title>
            </div>

            <div className="flex space-x-12 lg:space-x-20">
              <div className="space-y-3">
                <Text Tag="a" href="/" className="block w-fit">
                  HOME
                </Text>
                <Text Tag="a" href="/" className="block w-fit">
                  PRESALE
                </Text>
                <Text Tag="a" href="/" className="block w-fit">
                  HOW TO BUY
                </Text>
                <Text Tag="a" href="/" className="block w-fit">
                  ROADMAP
                </Text>
                <Text Tag="a" href="/" className="block w-fit">
                  FEATURES
                </Text>
              </div>
              <div className="space-y-3">
                <Text Tag="a" href="/" className="block w-fit">
                  FLOOFYNOMICS
                </Text>
                <Text Tag="a" href="/" className="block w-fit">
                  TEAM
                </Text>
                <Text Tag="a" href="/" className="block w-fit">
                  COMMUNITY
                </Text>
                <Text Tag="a" href="/" className="block w-fit">
                  WHITEPAPER
                </Text>
              </div>
            </div>
          </div>
        </main>

        <div className="pt-6 border-t-2 border-[rgba(255,255,255,.6)]">
          <p className="text-center text-text-light text-sm md:text-base font-semibold opacity-60">
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
    </footer>
  );
}

export default Footer;
