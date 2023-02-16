import React from "react";
import Header from "components/layout/Header";
import Hero from "components/layout/Hero";
import HowToBuy from "components/layout/HowToBuy";
import Team from "components/layout/Team";
import Footer from "components/layout/Footer";
import Tokenomics from "components/layout/Tokenomics";
import Whitepaper from "components/layout/Whitepaper";
import Products from "components/layout/Products";
import PreSale from "components/layout/PreSale";
import NFTBar from "components/layout/NFTBar";
import Roadmap from "components/layout/Roadmap";
import Stripe from "components/UI/Stripe";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <NFTBar />
      <PreSale />

      <div className="h-[60px] lg:h-[100px] mt-[-70px] lg:mt-[-100px] mb-[-60px] lg:mb-[-100px] w-full rotate-[3deg] relative z-[1000]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-full bg-black shadow-stripe"></div>
      </div>

      <Products />
      <div className="mt-[-20px] mb-[-20px]">
        <Stripe />
      </div>
      <Whitepaper />
      <div className="mt-[-20px] mb-[-20px]">
        <Stripe borderBottom={true} />
      </div>
      <Roadmap />
      <div className="mt-[-20px] mb-[-20px]">
        <Stripe borderBottom={true} />
      </div>
      <Tokenomics />
      <HowToBuy />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
