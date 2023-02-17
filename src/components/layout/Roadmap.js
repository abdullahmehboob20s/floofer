import RoadmapCardWrapper from "components/UI/RoadmapCardWrapper";
import RoadmapPopupCard from "components/UI/RoadmapPopupCard";
import React from "react";

function Roadmap() {
  return (
    <div className="relative z-10">
      <h1
        className="text-center font-huglove text-[#15112C] text-4xl lg:text-5xl xl:text-7xl text-shadow-black-sharp absolute top-6 lg:top-20 left-1/2 -translate-x-1/2 z-20"
        style={{
          "-webkit-text-stroke": "2px white",
        }}
      >
        ROADMAP
      </h1>

      <img
        src="images/roadmap-bg.png"
        className="w-full pointer-events-none select-none -z-10"
        alt=""
      />

      <RoadmapCardWrapper className="top-[26vw] left-[10vw] group">
        <RoadmapPopupCard className="bottom-[70%] left-[70%]">
          <p className="text-[1.1vw]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Distinctio, earum. Voluptas, ea quas laudantium dicta minus optio
            omnis nostrum, totam excepturi accusantium provident laborum vitae
            animi nobis atque. Dolore, consequuntur.
          </p>
        </RoadmapPopupCard>
      </RoadmapCardWrapper>

      <RoadmapCardWrapper className="top-[43vw] left-[26.5vw] group">
        <RoadmapPopupCard className="bottom-[70%] left-[70%]">
          <p className="text-[1.1vw]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Distinctio, earum. Voluptas, ea quas laudantium dicta minus optio
            omnis nostrum, totam excepturi accusantium provident laborum vitae
            animi nobis atque. Dolore, consequuntur.
          </p>
        </RoadmapPopupCard>
      </RoadmapCardWrapper>

      <RoadmapCardWrapper className="top-[25.5vw] left-[48vw] group">
        <RoadmapPopupCard className="bottom-[70%] left-[70%]">
          <p className="text-[1.1vw]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Distinctio, earum. Voluptas, ea quas laudantium dicta minus optio
            omnis nostrum, totam excepturi accusantium provident laborum vitae
            animi nobis atque. Dolore, consequuntur.
          </p>
        </RoadmapPopupCard>
      </RoadmapCardWrapper>

      <RoadmapCardWrapper className="top-[43.5vw] left-[70.5vw] group">
        <RoadmapPopupCard
          className="bottom-[70%] right-[70%]"
          pointerToRight={true}
        >
          <p className="text-[1.1vw]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Distinctio, earum. Voluptas, ea quas laudantium dicta minus optio
            omnis nostrum, totam excepturi accusantium provident laborum vitae
            animi nobis atque. Dolore, consequuntur.
          </p>
        </RoadmapPopupCard>
      </RoadmapCardWrapper>
    </div>
  );
}

export default Roadmap;
