import React from "react";

function Button({ name }) {
  return (
    <div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded">
        {name}
      </button>
    </div>
  );
}

export default Button;
