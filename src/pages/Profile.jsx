import React from "react";

const Profile = () => {
  return (
    <form className="w-full flex flex-col gap-6 justify-baseline items-start h-full">
      <input
        type="number"
        placeholder="Enter Your Age"
        className="border-2 p-2 w-full
      "
      />
      <input
        type="email"
        placeholder="Enter Your Email"
        className="border-2 p-2 w-full
      "
      />
      {/* <button>Next</button> */}
    </form>
  );
};

export default Profile;
