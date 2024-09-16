import React from "react";
import { FaTwitter, FaInstagramSquare, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-screen h-auto bg-[#0e3531] pt-8 text-center text-white ">
      <div>
        <h1 className=" text-start text-3xl font-bold text-[#dadada] px-20">
          Help<span className="text-amber-300">Hub</span>
        </h1>
      </div>

      <div className="grid grid-cols-9 text-center px-20 py-8">
        <div className=" col-span-3 w-full rounded-3xl ">
          <div className=" row-span-full flex items-center mb-5">
            <input
              className="text-xl rounded  px-4 py-1
           outline-none w-80 leading-8 shadow"
              placeholder="Search.."
            />
            <button className=" w-20 text-xl mx-3 p-1 bg-amber-400 rounded text-white shadow">
              Search
            </button>
          </div>

          <div className=" row-span-full flex gap-3 text-lg">
            <FaTwitter size={30} />
            <FaWhatsapp size={30} />
            <FaInstagramSquare size={30} />
          </div>
        </div>

        <div className="col-span-2 p-3 bg-slate-200/10 h-auto mx-2 leading-6 ">
          <a href="#" className="text-lg font-medium">
            Services
          </a>
          <ul className="text-sm leading-6 ">
            <li>Get Room</li>
            <li>Carpenter</li>
            <li>Electrician</li>
            <li>Plumber</li>
          </ul>
        </div>

        <div className="col-span-2 p-3 bg-slate-200/10 h-auto mx-2 leading-6 ">
          <a href="#" className="text-lg font-medium">
            Contact
          </a>
          <ul className="text-sm leading-6 ">
            <li>About</li>
            <li>Contact</li>
            <li>Help</li>
          </ul>
        </div>

        <div className="col-span-2 p-3 bg-slate-200/10 h-auto mx-2 leading-6 ">
          <a href="#" className="text-lg font-medium">
            What's Special
          </a>
          <ul className="text-sm leading-6 ">
            <li>Easy Service</li>
            <li>Opportunity for Worker</li>
            <li>Solve daily Problem</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="pb-3 pt-4">
        <p className="text-sm">&copy; 2024 HelpHUB All right reserved </p>
      </div>
    </div>
  );
}

export default Footer;
