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

      <div className="absolute top-[26vw] left-[10vw] w-[8vw] h-[10vw] group">
        <div className="absolute bottom-[70%] left-[70%] w-[26vw] border-2 bg-white py-[2vw] px-[3vw] rounded-[1vw] pointer-events-none opacity-0 transition-all duration-200 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
          <p className="text-[1.1vw]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Distinctio, earum. Voluptas, ea quas laudantium dicta minus optio
            omnis nostrum, totam excepturi accusantium provident laborum vitae
            animi nobis atque. Dolore, consequuntur.
          </p>
        </div>
      </div>

      <div className="absolute top-[43vw] left-[26.5vw] w-[8vw] h-[10vw] group">
        <div className="absolute bottom-[70%] left-[70%] w-[26vw] border-2 bg-white py-[2vw] px-[3vw] rounded-[1vw] pointer-events-none opacity-0 transition-all duration-200 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
          <p className="text-[1.1vw]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Distinctio, earum. Voluptas, ea quas laudantium dicta minus optio
            omnis nostrum, totam excepturi accusantium provident laborum vitae
            animi nobis atque. Dolore, consequuntur.
          </p>
        </div>
      </div>

      <div className="absolute top-[25.5vw] left-[48vw] w-[8vw] h-[10vw] group">
        <div className="absolute bottom-[70%] left-[70%] w-[26vw] border-2 bg-white py-[2vw] px-[3vw] rounded-[1vw] pointer-events-none opacity-0 transition-all duration-200 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
          <p className="text-[1.1vw]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Distinctio, earum. Voluptas, ea quas laudantium dicta minus optio
            omnis nostrum, totam excepturi accusantium provident laborum vitae
            animi nobis atque. Dolore, consequuntur.
          </p>
        </div>
      </div>

      <div className="absolute top-[43.5vw] left-[70.5vw] w-[8vw] h-[10vw] group">
        <div className="absolute bottom-[70%] right-[70%] w-[26vw] border-2 bg-white py-[2vw] px-[3vw] rounded-[1vw] pointer-events-none opacity-0 transition-all duration-200 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
          <p className="text-[1.1vw]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Distinctio, earum. Voluptas, ea quas laudantium dicta minus optio
            omnis nostrum, totam excepturi accusantium provident laborum vitae
            animi nobis atque. Dolore, consequuntur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
