import React from "react";

function HowToBuySideBySideSection({ children, className }) {
  return (
    <div className={`grid lg:grid-cols-2 items-center ${className}`}>
      {children}
    </div>
  );
}

export default HowToBuySideBySideSection;
