import React from "react";

function Button({ children, className }) {
  return (
    <button
      className={`shadow-button font-marsmelloe text-white bg-black text-sm xl:text-xl px-4 lg:px-6 rounded-md xl:rounded-lg py-2 xl:py-0 xl:h-[50px] ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
