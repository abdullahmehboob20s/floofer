import React from "react";

const Separator = ({ children }) => {
  return <div className="mx-4 my-2">{children}</div>;
};

const texts = [
  { title: "Floofer Dating" },
  { title: "Floofer health profile" },
  { title: "The Love NFT" },
  { title: "The Floofy Kennel" },
];

function NFTBar() {
  return (
    <div className="">
      <div className="text-white py-4 xl:py-6 flex items-center relative z-[200]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-full -z-10 border-b-[6px] border-white bg-header"></div>

        <div className="container-wrapper">
          <main className="flex items-center justify-center flex-wrap -mx-4 -my-2">
            {texts.map((item, i) => (
              <>
                <Separator>
                  <p className="text-lg ms:text-xl xl:text-3xl font-huglove text-white">
                    {item.title}
                  </p>
                </Separator>

                {texts.length - 1 == i ? null : (
                  <Separator>
                    <img
                      src="images/paw.svg"
                      className="max-w-[20px] md:max-w-[30px] xl:max-w-[44px]"
                      alt=""
                    />
                  </Separator>
                )}
              </>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}

export default NFTBar;
