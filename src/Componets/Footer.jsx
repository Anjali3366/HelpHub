import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {

  return <div className="w-screen h-80 bg-blue-900 p-5 pt-10 text-center text-white ">

  <div className="grid grid-cols-12 text-center p-4">
    <div className="col-span-2 m-2 p-3 bg-slate-200/10 h-auto gap-4 leading-6 ">
    <a href="#" className="text-lg font-medium">Services</a>
<ul className="text-sm leading-6 ">
  <li>Get Room</li>
  <li>Carpenter</li>
  <li>Electrician</li>
  <li>Plumber</li>
</ul>


    </div>
  
    <div className="col-span-2 m-2 p-3 bg-slate-200/10 h-auto gap-4 leading-6 ">
    <a href="#" className="text-lg font-medium">Contact</a>
<ul className="text-sm leading-6 ">
  <li>About</li>
  <li>Contact</li>
  <li>Help</li>
</ul>


    </div>

    <div className="col-span-3 m-2 p-3 bg-slate-200/10 h-auto gap-4 leading-6 ">
    <a href="#" className="text-lg font-medium">What's Special</a>
<ul className="text-sm leading-6 ">
  <li>Easy Service</li>
  <li>Opportunity for Worker</li>
  <li>Solve daily Problem</li>
</ul>


    </div>


    <div className=" col-span-3 w-full flex items-center px-4 py-2 rounded-3xl ">
          <div className=" row-span-full flex items-center">
          <input className="text-xl rounded  px-4 py-1
           outline-none w-80 leading-8 shadow" placeholder="Search.." />
       <button className=" w-20 text-xl mx-3 p-1 bg-amber-400 rounded text-white shadow">Search</button>
       </div>
       
       <div  className=" row-span-full  text-lg">
<FaTwitter className="text-4xl p-1" />
<FaWhatsapp className="text-4xl p-1"/>
<FaInstagramSquare className="text-4xl p-1" />

</div>

        


  </div>

  </div>

  <hr  />

  <div className="m-4 pl-12">
        <h1 className=" text-start text-3xl font-bold text-[#dadada]">
          Help<span className="text-amber-400">Hub</span>
        </h1>
        <p className="text-sm">&copy; 2024 HelpHUB All right reserved </p>
      </div>

  </div>;
}

export default Footer;
