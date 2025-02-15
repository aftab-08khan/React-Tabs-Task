import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("");

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData?.mode) {
      setMode(savedData.mode);
    }
  }, []);

  const handleInputChange = (e) => {
    setMode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mode) {
      alert("Please select a theme.");
      return;
    }

    const data = JSON.parse(localStorage.getItem("formData")) || {};
    localStorage.setItem("settingsCompleted", "true");
    localStorage.setItem("formData", JSON.stringify({ ...data, mode }));

    navigate("/Card");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <form
        className="bg-white dark:bg-gray-800 p-6 shadow-lg rounded-lg w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Select Theme
        </h2>

        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="dark"
              checked={mode === "dark"}
              onChange={handleInputChange}
              className="w-5 h-5 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <label
              htmlFor="dark"
              className="text-gray-700 dark:text-gray-300 font-medium cursor-pointer"
            >
              Dark Mode
            </label>
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="radio"
              id="light"
              name="theme"
              value="light"
              checked={mode === "light"}
              onChange={handleInputChange}
              className="w-5 h-5 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <label
              htmlFor="light"
              className="text-gray-700 dark:text-gray-300 font-medium cursor-pointer"
            >
              Light Mode
            </label>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
