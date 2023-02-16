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

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <NFTBar />
      <PreSale />
      <Products />
      <Whitepaper />
      <Tokenomics />
      <HowToBuy />
      <Team />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
