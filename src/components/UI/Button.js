import React from "react";

function Button({ children, className }) {
  return (
    <button
      className={`shadow-button font-marsmelloe text-white bg-black text-sm lg:text-lg xl:text-xl px-4 lg:px-6 xl:px-8 rounded-md xl:rounded-lg py-2 xl:py-3 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
