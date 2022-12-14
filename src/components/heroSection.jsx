import React from "react";

const heroSection = () => {
  return (
    <main>
       {/* --heroSection- */}
      <div className="grid md:grid-cols-2 px-5 md:px-10 lg:px-20 pt-10 md:pt-20 pb-10 items-center md:gap-3 lg:gap-0 ">
        <div className="font-RedRose space-y-6">
          <p className="text-3xl text-center leading-normal font-normal md:text-left md:pr-7 lg:text-6xl">
            Rent a <span className="text-[#A02279] font-bold">Place </span>
            away from
            <span className="text-[#A02279] font-bold"> Home</span> in the
            <span className="text-[#A02279] font-bold"> Metaverse</span>
          </p>
          <p className="text-black text-center font-normal md:text-base md:text-left lg:text-2xl ">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="flex font-RedRose">
            <input
              type="text"
              className="rounded-l-lg border border-slate-300 placeholder:text-xs placeholder:font-light py-2 w-full pl-2"
              placeholder="Search for location"
            />
            <button className="bg-[#A02279] text-white px-10 py-2 rounded-r-lg border border-transparent">
              Search
            </button>
          </div>
        </div>

        <div className="md:flex hero-images justify-center space-x-3 hidden">
          <div className="space-y-3 mt-20">
            <img
              src="/heroimage2.jpg"
              alt=""
              className="rounded-xl w-[200px]"
            />
            <img
              src="/heroimage4.jpg"
              alt=""
              className="rounded-xl w-[200px]"
            />
          </div>
          <div className="space-y-3">
            <img
              src="/heroimage1.jpg"
              alt=""
              className="rounded-xl w-[200px]"
            />
            <img
              src="/heroimage3.jpg"
              alt=""
              className="rounded-xl w-[200px]"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default heroSection;
