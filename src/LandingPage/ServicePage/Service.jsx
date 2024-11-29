import React from "react";
import ServiceCart from "./ServiceCart";

function Service() {
  return (
    <div className="w-screen h-auto flex flex-col items-center">
      <div className="w-full h-[400px] bg-cover bg-[url(./service.avif)] opacity-80 flex items-center px-[12%]">
        <div className="w-[500px] opacity-100">
          <h1 className="text-[40px] font-bold mb-2">Services</h1>
          <p className="text-[18px] font-medium">
            We offer a comprehensive range of Home & Commercial cleaning
            services.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-10 px-28 my-16">
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
