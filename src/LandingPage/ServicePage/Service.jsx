import React from "react";
import ServiceCart from "./ServiceCart";

function Service() {
  return (
    <div className="w-screen h-auto flex flex-col items-center py-10">
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

      <div className="grid grid-cols-3 gap-8 px-24 mb-20">
        <ServiceCart
          image="/public/Electricion.png"
          name="Electricion"
          details=""
          rating=""
        />
        <ServiceCart
          image="/public/Plumber.jpg"
          name="Plumber"
          details=""
          rating=""
        />
        <ServiceCart
          image="/public/Carpenter.avif"
          name="Carpanter"
          details=""
          rating=""
        />
        <ServiceCart
          image="/public/Mechanic.png"
          name="Machanic"
          details=""
          rating=""
        />
        <ServiceCart
          image="/public/Painter.jpg"
          name="Painter"
          details=""
          rating=""
        />
        <ServiceCart
          image="/public/Cleaner.webp"
          name="Cleaner"
          details=""
          rating=""
        />
      </div>
    </div>
  );
}
export default Service;
