import React from "react";
import Header from "components/layout/Header";
import Hero from "components/layout/Hero";
import HowToBuy from "components/layout/HowToBuy";
import Team from "components/layout/Team";
import Footer from "components/layout/Footer";
import Tokenomics from "components/layout/Tokenomics";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Tokenomics />
      <HowToBuy />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
