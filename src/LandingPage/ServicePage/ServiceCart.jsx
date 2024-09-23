import React from "react";
import { IoStar, IoStarHalf } from "react-icons/io5";

function ServiceCart({ image, name, details, rating }) {
  return (
    <div className="shadow p-4 rounded-lg">
      <div>
        <img
          className="object-cover rounded-t-lg w-full h-[250px]"
          src={image}
          alt={name}
        />
      </div>

      <div>
        <div className="flex justify-between items-center mt-3 mb-2">
          <h1 className="text-xl font-bold">{name}</h1>
          <div className="flex">
            <IoStar size={20} />
            <IoStar size={20} />
            <IoStarHalf size={20} />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur,
          consequatur.{" "}
        </p>
        <div className="flex justify-between items-center mt-2 mb-1">
          <button className="bg-blue-500 w-[108px] h-[38px] text-white font-semibold rounded-md">
            View Details
          </button>
          <button className="bg-green-500 w-[108px] h-[38px] text-white font-semibold rounded-md">
            Service Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceCart;
