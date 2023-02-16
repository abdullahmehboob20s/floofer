import React from "react";

function Progressbar({ progress }) {
  return (
    <div className="h-[20px] xl:h-[30.79px] rounded-full border-2 border-white bg-white">
      <div
        className="h-full rounded-full bg-progress relative"
        style={{ width: `${progress}%` }}
      >
        <img
          src="images/progress-dog.png"
          className="w-[50px] xl:w-[68px] absolute bottom-0 -right-[23px] dog-shadow"
          alt=""
        />
      </div>
    </div>
  );
}

export default Progressbar;
