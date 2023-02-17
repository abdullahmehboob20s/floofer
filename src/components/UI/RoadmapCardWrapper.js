import React from "react";

function RoadmapCardWrapper({
  children,
  className = "top-[26vw] left-[10vw]",
}) {
  return (
    <div className={`absolute w-[8vw] h-[10vw] ${className}`}>{children}</div>
  );
}

export default RoadmapCardWrapper;
