import React from "react";
import { SearchIcon, UploadIcon } from "@heroicons/react/outline";

function Searchbar() {
  return (
    <div className="relative  z-20 flex flex-col justify-center    mx-auto flex-center">
      <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
        <div className="container relative left-0 z-50 flex  h-auto h-full">
          <div className="relative flex items-center w-full lg:w-70 h-full group">
            <SearchIcon className="absolute left-0 z-20  w-5 h-5 ml-3 text-gray-500 pointer-events-none  group-hover:text-gray-400 sm:block" />

            <input
              type="text"
              className="block w-full py-1.5 pl-10 pr-24 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-900 text-gray-400 aa-input"
              placeholder="Search"
            />
            <UploadIcon className="absolute right-0 w-5 h-5 mr-2 text-xs text-gray-400 cursor-pointer  md:block" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
