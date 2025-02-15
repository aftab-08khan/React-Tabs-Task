import React from "react";

const Card = () => {
  const userData = JSON.parse(localStorage.getItem("formData")) || {};

  return (
    <div className="flex justify-center items-center ">
      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-xl p-8 w-full max-w-md transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-6">
          User Profile
        </h2>

        <div className="space-y-4">
          {/* Age */}
          <div className="flex items-center space-x-3">
            <span className="text-gray-500 dark:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Age:</span> {userData.age}
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3">
            <span className="text-gray-500 dark:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Email:</span> {userData.email}
            </p>
          </div>

          {/* Theme Mode */}
          <div className="flex items-center space-x-3">
            <span className="text-gray-500 dark:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </span>
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

          {/* Skills */}
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
    </div>
  );
};

export default Card;
