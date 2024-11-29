import React from "react";

function Button({ name, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-amber-300 px-6 py-2 rounded-sm font-semibold   "
      >
        {name}
      </button>
    </div>
  );
}

export default Button;
