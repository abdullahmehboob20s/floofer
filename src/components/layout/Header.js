import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import OutsideClickDetector from "hooks/OutsideClickDetector";

function Header() {
  const [sidebarVisible, setSidebarVisibility] = useState(false);
  const sidebarRef = OutsideClickDetector(() => setSidebarVisibility(false));

  return (
    <nav className="bg-header h-header-height z-[100] relative">
      <div className="container-wrapper flex h-full items-center justify-between">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <img
            src="images/cropped-logo.png"
            className="w-[50px] sm:w-[60px] lg:w-[70px] xl:w-[80px] logo-shadow relative top-2 lg:top-3"
            alt=""
          />
          <p className="text-xl sm:text-2xl xl:text-3xl font-huglove text-white">
            FLooFER
          </p>
        </div>

        <button
          className="text-white text-xl flex lg:hidden"
          onClick={() => setSidebarVisibility(true)}
        >
          <GiHamburgerMenu />
        </button>

        <div
          ref={sidebarRef}
          className={`flex text-white uppercase
          lg:static lg:w-auto lg:h-auto lg:bg-none lg:flex-row lg:space-x-6 xl:space-x-7 lg:items-center lg:py-0 lg:px-0 lg:space-y-0 lg:border-none

          // RESPONSIVE
          
          fixed top-0 right-0 w-[280px] h-screen bg-header flex-col space-x-0 items-stretch py-8 px-10 space-y-4 transition-all duration-300 z-[200] border-l-4 border-white ${
            sidebarVisible
              ? "translate-x-0"
              : "translate-x-[280px] lg:translate-x-0"
          } 
  `}
        >
          <div className="flex lg:hidden pb-2 items-center justify-between space-x-4">
            <p className="text-2xl xl:text-3xl font-huglove text-white">
              FLooFER
            </p>

            <button
              className="text-sm"
              onClick={() => setSidebarVisibility(false)}
            >
              <ImCross />
            </button>
          </div>

          <p className="font-marsmelloe text-sm xl:text-base">Home</p>
          <p className="font-marsmelloe text-sm xl:text-base">Roadmap</p>
          <p className="font-marsmelloe text-sm xl:text-base">Whitepaper</p>
          <p className="font-marsmelloe text-sm xl:text-base">Community</p>
          <p className="font-marsmelloe text-sm xl:text-base">Telegram</p>

          <div className="py-3 lg:p-0">
            <div className="divider-vertical hidden lg:block h-[28px] border-purple-1"></div>
            <div className="divider-horizontal block lg:hidden w-full border-purple-1"></div>
          </div>

          <a
            target="_blank"
            href="https://twitter.com"
            className="flex items-center space-x-2 xl:space-x-3"
          >
            <FaTwitter className="text-twitter text-base xl:text-2xl" />{" "}
            <span className="font-marsmelloe text-sm xl:text-base">
              Twitter
            </span>
          </a>

          <p className="font-marsmelloe text-sm xl:text-base">buy now</p>
        </div>

        <div
          className={`black-screen z-[150] ${sidebarVisible && "show"}`}
        ></div>
      </div>
    </nav>
  );
}

export default Header;
