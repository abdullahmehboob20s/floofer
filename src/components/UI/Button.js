import React from "react";

function Button({ children }) {
  return (
    <button className="shadow-button font-marsmelloe text-white bg-black text-xl px-6 rounded-lg h-[50px]">
      {children}
    </button>
  );
}

export default Button;
