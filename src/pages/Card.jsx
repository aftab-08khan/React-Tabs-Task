import React from "react";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("formData")) || {};

  const handleDelete = () => {
    localStorage.clear();
    navigate("/Profile");
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-xl p-8 w-full max-w-md transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-6">
          User Profile
        </h2>

        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <span className="text-gray-500 dark:text-gray-400">📅</span>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Age:</span> {userData.age}
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-gray-500 dark:text-gray-400">📧</span>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Email:</span> {userData.email}
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-gray-500 dark:text-gray-400">🎨</span>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Theme Mode:</span>{" "}
              <span
                className={`px-2 py-1 rounded-md text-white ${
                  userData.mode === "dark" ? "bg-gray-700" : "bg-blue-500"
                }`}
              >
                {userData.mode}
              </span>
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Skills:
            </p>
            <div className="flex flex-wrap gap-2">
              {userData.skills?.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm transform transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Delete Button */}
      <button
        onClick={handleDelete}
        className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 mt-4"
      >
        Delete Data
      </button>
    </div>
  );
};

export default Card;
