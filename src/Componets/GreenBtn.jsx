import React from "react";

function GreenBtn({ btnName }) {
  return (
    <div>
     
      <button className="bg-[#0e3531]  mt-5 px-8 py-2 rounded-sm font-semibold  text-white ">
  {btnName}
</button>
    </div>
  );
}

export default GreenBtn;
