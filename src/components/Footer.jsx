import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white grid md:grid-cols-4 text-center md:text-left gap-7 md:gap-0  py-10  md:px-10 lg:px-20">
      <div className=" flex-col md:flex justify-between font-RedRose gap-4 md:gap-0">
        {/* --Metabnb- */}
        <div className="flex items-center justify-center md:justify-start">
          <img src="/house-white.svg" alt="" />
          <h1 className="font-bold text-2xl lg:text-5xl">Metabnb</h1>
        </div>
        <div className="">
          <div className="space-y-5">
             {/* --social-medias- */}
            <div className="flex  space-x-10 py-5 md:py-0 justify-center md:justify-start text-white">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
            </div>
              
            <div className="font-RedRose">
              <p> &copy; 2022 Metabnb </p>
            </div>
          </div>
        </div>
      </div>

      {/* --Community- */}

      <div className="font-RedRose">
        <h3 className="font-bold text-lg">Community</h3>
        <ul className="mt-4 space-y-3 font-normal text-sm">
          <li>
            <a href="#!">NFT</a>
          </li>
          <li>
            <a href="#!">Tokens</a>
          </li>
          <li>
            <a href="#!">Landlords</a>
          </li>
          <li>
            <a href="#!">Discord</a>
          </li>
        </ul>
      </div>

      {/* --Places- */}

      <div className="font-RedRose">
        <h3 className="font-bold text-lg">Places</h3>
        <ul className="mt-4 space-y-3 font-normal text-sm">
          <li>
            <a href="#!">Castle</a>
          </li>
          <li>
            <a href="#!">Farms</a>
          </li>
          <li>
            <a href="#!">Beach</a>
          </li>
          <li>
            <a href="#!">Learn More</a>
          </li>
        </ul>
      </div>

      {/* -About-Us-- */}

      <div className="font-RedRose">
        <h3 className="font-bold text-lg">About Us</h3>
        <ul className="mt-4 space-y-3 font-normal text-sm">
          <li>
            <a href="#!">Road map</a>
          </li>
          <li>
            <a href="#!">Creators</a>
          </li>
          <li>
            <a href="#!">Career</a>
          </li>
          <li>
            <a href="#!">Contact Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
