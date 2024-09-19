import React from "react";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaUnlockAlt } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
function Login() {
  const [showPassword, setShowPassword] = usestate(false);
  return (
    <div className="bg-[url(./loginBg.jpg)] bg-cover w-[60vh] theme-bg-2 h-[50vh] text-white rounded-md">
      <div className="relative bg-black/25 backdrop-blur-md h-[50vh]  pt-9">
<div className="text-2xl absolute right-6 top-6">
<MdClose />
</div>



        <h3 className="text-amber-300 text-4xl font-semibold text-center">
         Login   
        </h3>

        <form className="flex flex-col items-center mt-5 " action="">
          <div className="  p-3  mb-4">
            <br />
         <span className="absolute flex items-center pt-2 pl-3 text-gray-500 text-2xl">   <MdEmail /></span>
            <input
              className="rounded-md py-2 px-10 w-[20rem] shadow-sm  text-black tracking-widest"
              type="email"
              id="email"
              placeholder="Email.."
            />
          </div>
        
          <div className=" p-3 "> 
            <span className="absolute flex items-center pt-2 pl-3 text-gray-500 text-2xl">   <FaUnlockAlt/></span>

            {/* <span> {showPassword ? <MdVisibilityOff /> : <MdVisibility />}</span> */}



            <input
              className="rounded-md py-2 px-10 w-[20rem] tracking-widest shadow-sm text-black"
              type={showPassword ? "text":"password"}
              id="password"
              placeholder="Password..."
            />
             <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 focus:outline-none"
      >
        {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
      </button>
          </div>
          <p className="text-xs ml-[14rem] text-amber-300 font-semibold">
    Forget Password ?
        </p>
        
          <button className="bg-amber-300 hover:bg-gradient-to-b hover:from-amber-400 hover:to-[#0e3531] mt-5 px-8 py-2 rounded-sm font-semibold  transition-transform hover:ease-out duration-300 ">
  Login
</button>
        </form>

        <p className="text-xs text-center mt-2 text-[#e7dddd]">
          Don't have an account ? 
       
          <span className="text-amber-300"> Register</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
// green color : #0e3531;
// yellow color: amber-300;

