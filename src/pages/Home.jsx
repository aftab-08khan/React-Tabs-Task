import React, { useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

const Home = ({ children }) => {
  const [activeTabs, setActiveTabs] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleTabs = (type) => {
    const profileCompleted =
      localStorage.getItem("profileCompleted") === "true";
    const detailsCompleted =
      localStorage.getItem("detailsCompleted") === "true";

    if (type === "Profile") {
      navigate(type);
    } else if (type === "Details") {
      if (profileCompleted) {
        navigate(type);
      } else {
        alert("Fill the profiles Details");
      }
    } else if (type === "Settings") {
      if (profileCompleted && detailsCompleted) {
        navigate(type);
      } else {
        alert("Fill the details form");
      }
    } else {
      alert("Please complete your profile first.");
    }
  };
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

      <ul className="flex justify-center gap-6 mb-8">
        {links.map((item, i) => (
          <button key={i} onClick={() => handleTabs(item.link)}>
            <li className="bg-indigo-700 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-800 transition">
              {item.name}
            </li>
          </button>
        ))}
      </ul>
<a href=" "> Button</a>
      <div className="w-full max-w-4xl">
        <Outlet context={[handleTabs]} />
      </div>
    </div>
  );
};

export default Home;
