import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";

const Header = () => {
    const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    console.log("Clicked")
   dispatch(toggleMenu());
  }  

  return (
    <div className="grid grid-flow-col p-2 mx-4">
      <div className="flex col-span-1 items-center">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-6 cursor-pointer"
          alt="menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPjngCfF1EEhYTfgOYyjr2tjCzfgjGltIi0FJCXJpFh2kj_1v52ym75Vcw4UPC4vrkk8s&usqp=CAU"
        />
        <img
          className="h-16 mx-4"
          alt="logo"
          src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
        />
      </div>
      <div className="col-span-10 px-8 flex items-center justify-center">
        <input
          className="w-1/2 border border-gray-400 p-2 outline-1 outline-blue-300 rounded-l-full"
          type="search"
        />
        <button className="border border-gray-400 px-4 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1 flex items-center">
        <img
          className="h-9"
          alt="user-icon"
          src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
