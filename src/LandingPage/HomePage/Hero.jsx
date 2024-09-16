import { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import Button from "../../Componets/Button";

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <AwesomeSlider
      className="overflow-hidden flex-grow-0 w-[100%] h-[91vh]"
      selected={currentIndex}
    >
      <div className="flex h-full w-full">
        <div className="w-full">
          <img
            src="/public/Electricion.png"
            alt="img1"
            className="object-cover w-full bg-center opacity-30"
          />
        </div>
        <div className="absolute top-[30%] right-[20%] left-[20%] flex flex-col items-center justify-center">
          <h1
            className="text-[45px] font-bold text-[#FED766]"
            style={{
              fontFamily: "Rowdies, sans-serif",
              fontWeight: 700,
              fontStyle: "normal",
            }}
          >
            Home Services at Your Doorstep
          </h1>
          <p
            className="text-[18px] text-[#EFF1F3] my-5"
            style={{
              fontFamily: "Oleo Script, system-ui",
              fontWeight: 400,
              fontStyle: "normal",
            }}
          >
            Get professional, reliable, and affordable home services from
            skilled experts near you. Whether it's plumbing, electrical work,
            cleaning, or repairs, we handle it all with care and precision. Book
            now and enjoy a hassle-free experience, right from the comfort of
            your home.
          </p>
          <Button name="More View" />
        </div>
      </div>
      <div className="flex w-full h-fit">
        <div className="w-full">
          <img
            src="/public/Plumber.jpg"
            alt="img1"
            className="object-cover w-full bg-center opacity-30"
          />
        </div>
        <div className="absolute top-[30%] right-[20%] left-[20%] flex flex-col items-center justify-center">
          <h1
            className="text-[45px] font-bold text-[#FED766]"
            style={{
              fontFamily: "Rowdies, sans-serif",
              fontWeight: 700,
              fontStyle: "normal",
            }}
          >
            Home Services at Your Doorstep
          </h1>
          <p
            className="text-[18px] text-[#EFF1F3] my-5"
            style={{
              fontFamily: "Oleo Script, system-ui",
              fontWeight: 400,
              fontStyle: "normal",
            }}
          >
            Get professional, reliable, and affordable home services from
            skilled experts near you. Whether it's plumbing, electrical work,
            cleaning, or repairs, we handle it all with care and precision. Book
            now and enjoy a hassle-free experience, right from the comfort of
            your home.
          </p>
          <Button name="More View" />
        </div>
      </div>
      <div className="flex w-full h-fit">
        <div className="w-full">
          <img
            src="/public/Mechanic.png"
            alt="img1"
            className="object-cover w-full bg-center opacity-30"
          />
        </div>
        <div className="absolute top-[30%] right-[20%] left-[20%] flex flex-col items-center justify-center">
          <h1
            className="text-[45px] font-bold text-[#FED766]"
            style={{
              fontFamily: "Rowdies, sans-serif",
              fontWeight: 700,
              fontStyle: "normal",
            }}
          >
            Home Services at Your Doorstep
          </h1>
          <p
            className="text-[18px] text-[#EFF1F3] my-5"
            style={{
              fontFamily: "Oleo Script, system-ui",
              fontWeight: 400,
              fontStyle: "normal",
            }}
          >
            Get professional, reliable, and affordable home services from
            skilled experts near you. Whether it's plumbing, electrical work,
            cleaning, or repairs, we handle it all with care and precision. Book
            now and enjoy a hassle-free experience, right from the comfort of
            your home.
          </p>
          <Button name="More View" />
        </div>
      </div>
      <div className="flex w-full h-fit">
        <div className="w-full">
          <img
            src="/public/Carpenter.avif"
            alt="img1"
            className="object-cover w-full bg-center opacity-30"
          />
        </div>
        <div className="absolute top-[30%] right-[20%] left-[20%] flex flex-col items-center justify-center">
          <h1
            className="text-[45px] font-bold text-[#FED766]"
            style={{
              fontFamily: "Rowdies, sans-serif",
              fontWeight: 700,
              fontStyle: "normal",
            }}
          >
            Home Services at Your Doorstep
          </h1>
          <p
            className="text-[18px] text-[#EFF1F3] my-5"
            style={{
              fontFamily: "Oleo Script, system-ui",
              fontWeight: 400,
              fontStyle: "normal",
            }}
          >
            Get professional, reliable, and affordable home services from
            skilled experts near you. Whether it's plumbing, electrical work,
            cleaning, or repairs, we handle it all with care and precision. Book
            now and enjoy a hassle-free experience, right from the comfort of
            your home.
          </p>
          <Button name="More View" />
        </div>
      </div>
    </AwesomeSlider>
  );
}

export default Hero;
