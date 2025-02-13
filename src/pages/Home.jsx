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
    <div className="flex flex-col items-center gap-14 bg-indigo-200 h-screen">
      <h1 className="text-6xl text-center font-extrabold tracking-wider">
        React Task
      </h1>
      <ul className="flex justify-between gap-6 ">
        {links.map((item, i) => {
          return (
            <Link key={i} to={item.link}>
              <li
                key={i}
                className="bg-indigo-800 text-white px-4 py-2 rounded-xl"
              >
                {item.name}
              </li>
            </Link>
          );
        })}
      </ul>
      <div>
        <Outlet />
      </div>
      <button className="bg-indigo-700 px-10 py-4 rounded-2xl text-white">
        Next
      </button>
    </div>
  );
};

export default Home;
