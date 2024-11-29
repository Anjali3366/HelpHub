import React from "react";
import { IoStar, IoStarHalf } from "react-icons/io5";
import GreenBtn from "../../Componets/GreenBtn";

function ServiceCart({ image, name, details, rating }) {
  return (
    <div className="shadow-lg p-4 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gray-100">
      <div>
        <img
          className="object-cover rounded-t-lg w-full h-[250px] transition-transform duration-500 hover:scale-105"
          src={image}
          alt={name}
        />
      </div>

      <div className="mt-3 px-1">
        <h1 className="text-xl font-bold text-gray-800 mb-1">{name}</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <div className="flex justify-between items-center my-2 ">
          <GreenBtn btnName="Service Now" />
          <div className="flex text-yellow-400">
            <IoStar size={20} />
            <IoStar size={20} />
            <IoStarHalf size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCart;
