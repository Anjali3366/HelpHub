import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const hendleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false);
  };

  const hendleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full h-[65px] flex justify-between items-center shadow md:px-16 px-5">
      <div>
        <h1 className="text-3xl font-bold text-[#1230AE]">
          Help<span className="text-amber-400">Hub</span>
        </h1>
      </div>

      <div className="hidden md:flex gap-10 items-center text-[16px] font-semibold">
        <NavLink to={"/"}>
          <span>Home</span>
        </NavLink>
        <NavLink to={"/about"}>
          <span>About</span>
        </NavLink>
        <NavLink to={"/service"}>
          <span>Service</span>
        </NavLink>
        <NavLink to={"/contact"}>
          <span>Contact</span>
        </NavLink>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-[68px] right-2 left-[35%] flex flex-col items-center text-[16px] font-semibold py-3 bg-white shadow-lg">
          <p className="mb-5">
            <span>Login</span> / <span>Singup</span>
          </p>
          <NavLink to={"/"}>
            <span className="my-1" onClickCapture={() => setIsMenuOpen(false)}>
              Home
            </span>
          </NavLink>
          <NavLink to={"/about"}>
            <span className="my-1" onClickCapture={() => setIsMenuOpen(false)}>
              About
            </span>
          </NavLink>
          <NavLink to={"/service"}>
            <span className="my-1" onClickCapture={() => setIsMenuOpen(false)}>
              Service
            </span>
          </NavLink>
          <NavLink to={"/contact"}>
            <span className="my-1" onClickCapture={() => setIsMenuOpen(false)}>
              Contact
            </span>
          </NavLink>
        </div>
      )}

      {isSearchOpen && (
        <div className="md:hidden absolute top-[68px] right-2 shadow-lg py-2 px-3 rounded text-xl">
          <input placeholder="Search..." className="outline-none" />
        </div>
      )}

      <div className="hidden md:flex gap-5 items-center">
        <div className="flex items-center px-4 py-2 rounded-3xl shadow">
          <input className="w-[150px] outline-none" placeholder="Search.." />
          <FaSearch size={20} className="cursor-pointer" />
        </div>
        <FaUserCircle size={30} className="cursor-pointer" />
      </div>

      <div className="md:hidden flex gap-5 items-center">
        <FaSearch
          size={20}
          className="cursor-pointer"
          onClick={hendleSearchToggle}
        />
        <IoMenu
          size={30}
          className="md:hidden cursor-pointer"
          onClick={hendleMenuToggle}
        />
      </div>
    </div>
  );
}

export default Header;
