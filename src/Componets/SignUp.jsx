import React from "react";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'; 
function SignUp({onClose}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
  <div className="fixed inset-0 z-50 bg-transparent backdrop-blur-lg flex justify-center items-center transition-opacity duration-300 ">
      <div className="bg-[url(./SignUpBg.jpg)] bg-cover w-[70vh] theme-bg-2 h-[55vh] text-white">
      <div className="relative bg-[#0e3531dd] h-[55vh]  pt-9">

      <div className="text-2xl absolute right-6 top-6">
<MdClose onClick={onClose} className="cursor-pointer" />
</div>
        <h3 className="text-white text-2xl font-semibold text-center">
          Get Started with <span>Help</span>
          <span className="text-amber-300">Hub</span>
        </h3>

        <form className="flex flex-col items-center mt-5 " action="">
          <div className="  p-3  ">
            <label className="  font-medium " htmlFor="name">
              Email
            </label>{" "}
            <br />
            <input
              className="rounded-md py-1 px-2 w-[25rem] shadow-sm text-black"
              type="text"
              id="name"
              placeholder="Email..."
            />
          </div>
          <div className=" flex flex-row justify-evenly  p-2 ">
            <div className=" mr-2">
              <label className="font-medium" htmlFor="firstName">
                First Name
              </label>{" "}
              <br />
              <input
                className="rounded-md py-1 px-2 text-black"
                type="text"
                id="firstName"
                placeholder=" First name..."
              />
            </div>

            <div>
              {" "}
              <label className="font-medium" htmlFor="lastName">
                Last Name
              </label>{" "}
              <br />
              <input
                className="rounded-md py-1 px-2 text-black"
                type="text"
                id="LastName"
                placeholder="Last name..."
              />
            </div>
          </div>
          <div className=" p-3  ">
            <label className="   font-medium " htmlFor="password">
              Password
            </label>{" "}
            <br />
            <input
              className="rounded-md py-1 px-2 w-[25rem] text-black"
              type={showPassword ? "text":"password"}
              id="name"
              placeholder="Password..."

             
            />
             <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute pt-3 right-24 text-gray-500 focus:outline-none"
            >
              {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
            </button>
          </div>
          <button className="bg-amber-300   mt-5 px-8 py-2 rounded-sm font-semibold  ">
  Sign up
</button>
        </form>

        <p className="text-xs text-center mt-2 text-[#e7dddd]">
          By signing up, you agree to our{" "}
          <span className="text-amber-300">Terms of Use</span> and{" "}
          <span className="text-amber-300">Privacy Policy</span>{" "}
        </p>
      </div>
    </div>
  </div>
  );
}

export default SignUp;
