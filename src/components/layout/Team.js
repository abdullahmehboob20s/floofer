import TeamCard from "components/UI/TeamCard";
import React from "react";

function Team() {
  return (
    <div className="py-12 lg:py-16 xl:py-20 bg-primary relative z-10">
      <div className="container-wrapper">
        <h1 className="text-center font-huglove text-3xl sm:text-4xl font-semibold mb-12 lg:mb-16 titles-shadow">
          FLooFER TEAM
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-10">
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
