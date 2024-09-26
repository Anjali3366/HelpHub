import React from "react";
import { IoStar, IoStarHalf } from "react-icons/io5";

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

      <div className="mt-4">
        <div className="flex justify-between items-center mt-3 mb-2">
          <h1 className="text-xl font-bold text-gray-800">{name}</h1>
          <div className="flex text-yellow-400">
            {/* Dynamic Star Rating Implementation */}
            <IoStar size={20} />
            <IoStar size={20} />
            <IoStarHalf size={20} />
          </div>
        </div>
        <p className="text-gray-600">
          {/* Replace with actual details or a fallback */}
          {details ||
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit."}
        </p>
        <div className="flex justify-between items-center mt-4 mb-1">
          <button className="bg-blue-500 w-[108px] h-[38px] text-white font-semibold rounded-md transition duration-300 hover:bg-blue-600 hover:scale-105">
            View Details
          </button>
          <button className="bg-green-500 w-[108px] h-[38px] text-white font-semibold rounded-md transition duration-300 hover:bg-green-600 hover:scale-105">
            Service Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceCart;
