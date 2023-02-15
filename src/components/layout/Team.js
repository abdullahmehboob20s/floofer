import TeamCard from "components/UI/TeamCard";
import React from "react";

function Team() {
  return (
    <div className="py-20 bg-primary relative z-10">
      <div className="container-wrapper">
        <h1 className="text-center font-huglove text-5xl font-semibold mb-20 titles-shadow">
          FLooFER TEAM
        </h1>

        <div className="grid grid-cols-4 gap-10">
          <TeamCard img="images/dog-1.png" />
          <TeamCard img="images/dog-2.png" />
          <TeamCard img="images/dog-3.png" />
          <TeamCard img="images/dog-4.png" />
          <TeamCard img="images/dog-5.png" />
          <TeamCard img="images/dog-6.png" />
          <TeamCard img="images/dog-7.png" />
          <TeamCard img="images/dog-8.png" />
        </div>
      </div>

      <img
        src="images/team-bg.png"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        alt=""
      />
    </div>
  );
}

export default Team;
