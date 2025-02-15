import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Button from "../components/Button";

const Profile = () => {
  const [handleTabs] = useOutletContext();

  const [formData, setFormData] = useState({
    age: "",
    email: "",
  });
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const navigate = useNavigate();

  const handleInput = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitProfile = (e) => {
    e.preventDefault();

    if (formData.age && formData.email) {
      localStorage.setItem("formData", JSON.stringify(formData));
      localStorage.setItem("profileCompleted", "true");
      navigate("/Details");
    } else {
      alert("Please fill in all fields.");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Profile Details
        </h1>
        <form className="space-y-6" onSubmit={handleSubmitProfile}>
          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Age
            </label>
            <input
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInput}
              type="number"
              placeholder="Enter Your Age"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInput}
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save & Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
