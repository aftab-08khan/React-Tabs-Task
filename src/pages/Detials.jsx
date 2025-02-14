import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Details = () => {
  const buttonList = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JAVASCRIPT" },
    { name: "REACT" },
  ];

  const [checkboxList, setCheckBoxList] = useState([]);
  const navigate = useNavigate();

  const handleCheckbox = (e) => {
    const { checked, value } = e.target;
    setCheckBoxList((prev) =>
      checked ? [...prev, value] : prev.filter((i) => i !== value)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("formData"));

    localStorage.setItem(
      "formData",
      JSON.stringify({ ...data, skills: checkboxList })
    );

    if (checkboxList.length >= 2) {
      navigate("/Settings");
    } else {
      alert("Please select at least 2 skills.");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form
        className="bg-white p-6 shadow-lg rounded-lg w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Select Your Skills
        </h2>

        <div className="space-y-3">
          {buttonList.map((item, i) => (
            <div key={i} className="flex items-center space-x-3">
              <input
                onChange={handleCheckbox}
                type="checkbox"
                id={item.name}
                value={item.name}
                className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                checked={checkboxList.includes(item.name)}
              />
              <label
                htmlFor={item.name}
                className="text-gray-700 font-medium cursor-pointer"
              >
                {item.name}
              </label>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Details;
