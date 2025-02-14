import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = ({ children }) => {
  const links = [
    {
      name: "Profile",
      link: "Profile",
    },
    {
      name: "Details",
      link: "Details",
    },
    {
      name: "Settings",
      link: "Settings",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-indigo-100 min-h-screen py-8">
      <h1 className="text-5xl font-extrabold text-indigo-800 tracking-wide mb-12">
        React Task
      </h1>

      {/* Navigation Links */}
      <ul className="flex justify-center gap-6 mb-8">
        {links.map((item, i) => (
          <Link key={i} to={item.link}>
            <li className="bg-indigo-700 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-800 transition">
              {item.name}
            </li>
          </Link>
        ))}
      </ul>

      {/* Outlet Area */}
      <div className="w-full max-w-4xl">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
