import { Setting5 } from "iconsax-react";
import React from "react";
import { HouseCard } from "./";

const Place = () => {
  return (
    <div className=" px-5 md:px-10 lg:px-20  py-10 md:py-32 font-RedRose">
      <div className="pb-10">
        <ul className="flex items-center justify-between text-xs md:text-xl md:font-normal overflow-scroll lg:overflow-visible">
          <li className="scroll durations">Restaurant</li>
          <li className="scroll durations">Cottage</li>
          <li className="scroll durations">Castle</li>
          <li className="scroll durations">Fantast city</li>
          <li className="scroll durations">Beach</li>
          <li className="scroll durations">Carbins</li>
          <li className="scroll durations">Off-grid</li>
          <li className="scroll durations">Farm</li>
          <div className="py-2 px-5 rounded border flex items-center space-x-3">
            <p>Location</p>
            <div className="rotate-90">
              <Setting5 color="#000" variant="TwoTone" />
            </div>
          </div>
        </ul>
      </div>
      {/* --Cards goes here- */}
      <div className="pt-5 md:pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-7">
        <HouseCard img={"/place1.png"} />
        <HouseCard img={"/place2.png"} />
        <HouseCard img={"/place3.png"} />
        <HouseCard img={"/place4.png"} />
        <HouseCard img={"/place5.png"} />
        <HouseCard img={"/place6.png"} />
        <HouseCard img={"/place7.png"} />
        <HouseCard img={"/place8.png"} />
        <HouseCard img={"/place9.png"} />
        <HouseCard img={"/place10.png"} />
        <HouseCard img={"/place11.png"} />
        <HouseCard img={"/place12.png"} />
        <HouseCard img={"/place13.png"} />
        <HouseCard img={"/place14.png"} />
        <HouseCard img={"/place15.png"} />
        <HouseCard img={"/place16.png"} />
      </div>
    </div>
  );
};

export default Place;
