import React from "react";

const Nft = () => {
  return (
    <div className="md:flex bg-[#A02279]  py-10  md:py-12 lg:py-24  px-5 md:px-10 lg:px-20 items-center font-RedRose text-white space-y-5 md:space-y-0">
      <div className="md:w-[40%] space-y-6 md:space-y-10">
        <h3 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center md:text-left">
          Metabnb NFTs
        </h3>
        <p className="text-lg font-normal leading-relaxed text-center md:text-left">
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="bg-white text-[#A02279] py-3 px-7 rounded-xl">
            Learn more
          </button>
        </div>
      </div>
      <div className="md:w-[60%]">
        <img src="/nft.png" alt="nft" className="mx-auto md:w-auto w-[70%]" />
      </div>
    </div>
  );
};

export default Nft;
