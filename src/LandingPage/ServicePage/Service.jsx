import React from "react";
import ServiceCart from "./ServiceCart";

function Service() {
  return (
    <div className="w-screen h-screen flex flex-col items-center py-10">
      <div>
        <h1 className="text-3xl text-black font-bold p-8">
          Home
          <span
            className="bg-blue-600 text-white px-10 py-2"
            style={{
              clipPath:
                "polygon(100% 0, 93% 50%, 100% 99%, 0% 100%, 7% 50%, 0% 0%)",
            }}
          >
            Service
          </span>
        </h1>
      </div>

      <div className="flex">
        <ServiceCart />
        <ServiceCart />
        <ServiceCart />
      </div>
    </div>
  );
}
export default Service;
