import React from "react";

const Button = ({ children }) => {
  return (
    <button
      type="submit"
      className="bg-indigo-700 px-10 py-4 rounded-2xl text-white"
    >
      {children}
    </button>
  );
};

export default Button;
