import { Heart } from "iconsax-react";
import React, { useState } from "react";

const Hero = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="hover:scale-125 transition transform duration-200 ease-out"
      >
        <Heart
          size="24"
          color={active ? "#A02279" : "#ffffff"}
          variant="Bulk"
        />
      </button>
    </>
  );
};

export default Hero;
