import React from "react";

function Progressbar({ progress }) {
  return (
    <div className="h-[20px] rounded-full border-2 border-white bg-white">
      <div
        className="h-full rounded-full bg-progress relative"
        style={{ width: `${progress}%` }}
      >
        <img
          src="images/progress-dog.gif"
          className="w-[5rem] absolute bottom-[-150%] -right-[30px] dog-shadow"
          alt=""
        />
      </div>
    </div>
  );
}

export default Progressbar;
