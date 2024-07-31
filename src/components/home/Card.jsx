import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="box">
      <div className="w-80 rounded-lg bg-white dark:bg-black border-gradient">
        <div className="relative w-full h-80">
          <Image
            src="https://www.dominos.co.in/files/items/Farmhouse.jpg"
            layout="fill"
            objectFit="cover"
            alt="pizaa"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
