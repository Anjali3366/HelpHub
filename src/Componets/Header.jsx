import React from "react";
import { FaUserCircle, FaSearch } from "react-icons/fa";

function Header() {
  return (
    <div className="w-full h-[65px] flex justify-between items-center shadow px-16">
      <div>
        <h1 className="text-3xl font-bold text-[#1230AE]">
          Help<span className="text-amber-400">Hub</span>
        </h1>
      </div>

      <div className="flex gap-10 items-center text-[16px] font-semibold">
        <span>Home</span>
        <span>About</span>
        <span>Service</span>
        <span>Contact</span>
      </div>

      <div className="flex gap-5 items-center">
        <div className="flex items-center px-4 py-2 rounded-3xl shadow">
          <input className="w-[150px] outline-none" placeholder="Search.." />
          <FaSearch size={20} className="cursor-pointer" />
        </div>
        <FaUserCircle size={30} className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Header;
