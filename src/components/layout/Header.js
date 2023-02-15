import React from "react";
import { FaTwitter } from "react-icons/fa";

function Header() {
  return (
    <nav className="bg-header h-header-height z-[100] relative">
      <div className="container-wrapper flex h-full items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="images/cropped-logo.png"
            className="w-[90px] logo-shadow relative top-3"
            alt=""
          />
          <p className="text-3xl font-huglove text-white">FLooFER</p>
        </div>

        <div className="flex items-center space-x-7 text-white uppercase">
          <p className="font-marsmelloe text-xl">Home</p>
          <p className="font-marsmelloe text-xl">Roadmap</p>
          <p className="font-marsmelloe text-xl">Whitepaper</p>
          <p className="font-marsmelloe text-xl">Community</p>
          <p className="font-marsmelloe text-xl">Telegram</p>

          <div className="divider-vertical h-[28px] border-purple-1"></div>

          <a
            target="_blank"
            href="https://twitter.com"
            className="flex items-center space-x-3"
          >
            <FaTwitter className="text-twitter text-2xl" />{" "}
            <span className="font-marsmelloe text-xl">Twitter</span>
          </a>

          <p className="font-marsmelloe text-xl">buy now</p>
        </div>
      </div>
    </nav>
  );
}

export default Header;
