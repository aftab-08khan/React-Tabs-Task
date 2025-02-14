import React from "react";

const Settings = () => {
  return (
    <div className="flex justify-center items-center">
      <form className="bg-white p-6 shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Select Theme
        </h2>

        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="dark"
              className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label
              htmlFor="dark"
              className="text-gray-700 font-medium cursor-pointer"
            >
              Dark Mode
            </label>
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="light"
              className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label
              htmlFor="light"
              className="text-gray-700 font-medium cursor-pointer"
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
