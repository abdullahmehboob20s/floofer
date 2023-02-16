import React from "react";

function TeamCard({ img }) {
  return (
    <div className="rounded-3xl border-4 lg:border-[6px]  border-black bg-team-card shadow-team-card py-7 px-6 ">
      <img
        src={img}
        className="h-[80px] lg:h-[100px] object-contain mx-auto mb-10"
        alt=""
      />

      <div className="w-full h-[5px] rounded-full bg-blue-link"></div>
    </div>
  );
}

export default TeamCard;
