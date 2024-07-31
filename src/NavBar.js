import React from "react";
import { ReactComponent as HeartIcon } from "./data/heart.svg";
import { ReactComponent as BagIcon } from "./data/bag.svg";

const NavBar = () => {
  return (
    <div className="bg-white border border-black w-11/12 rounded-[14px] mx-auto p-2 mt-8 flex items-center justify-between max-w-[1344px]">
      <span className="font-semibold italic text-lg px-4">Ecofit</span>
      <div className="flex gap-8">
        <a href="#" className="hover:text-gray-800">
          SEARCH
        </a>
        <a href="#" className="hover:text-gray-800">
          BLOGS
        </a>
        <a href="#" className="hover:text-gray-800">
          COLLECTION
        </a>
        <a href="#" className="hover:text-gray-800">
          SALE
        </a>
        <a href="#" className="hover:text-gray-800">
          GIRL
        </a>
        <a href="#" className="hover:text-gray-800">
          BOYS
        </a>
      </div>
      {/* <div className="flex items-center gap-8 pr-4">
        <HeartIcon className="h-6 w-6 hover:text-gray-800" />
        <BagIcon className="h-6 w-6 hover:text-gray-800" />
      </div> */}
      <div className="flex items-center gap-8 pr-4">
        <HeartIcon
          className="h-6 w-6 hover:text-gray-800"
          style={{ color: "#1C1B1F" }}
        />
        <BagIcon
          className="h-6 w-6 hover:text-gray-800"
          style={{ color: "#1C1B1F" }}
        />
      </div>
    </div>
  );
};

export default NavBar;
