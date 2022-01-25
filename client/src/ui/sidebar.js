import React from "react";
import Data from "../Data/pageData";
import { BiTask } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";
import { HiOutlineViewGridAdd } from "react-icons/hi";

function Sidebar() {
  const linkClass = `w-full 
  font-thin uppercase 
  hover:text-blue-500
  dark:text-gray-200
  text-gray-500
   focus:text-blue-500
    flex items-center
     p-4 my-2 
     transition-colors 
     duration-200 
     justify-start
      focus:bg-gradient-to-r 
      focus:from-white focus:
      to-blue-100
       focus:border-r-4 
  focus:border-blue-500 
  focus:dark:from-gray-700 
  dark:to-gray-800 
  focus:border-r-4 
  focus:border-blue-500`;

  return (
    <div className="bg-white h-1/2  lg:block rounded-2xl mt-6 ml-4 relative shadow-lg w-60 dark:bg-gray-700">
      <nav className="mt-6">
        <ul>
          <a className={linkClass} href="#messages">
            <span className="text-left">
              <HiOutlineViewGridAdd />
            </span>
            <span className="mx-4 text-sm font-normal">Add Project</span>
          </a>

          <a className={linkClass} href="#">
            <span className="text-left">
              <BiTask />
            </span>
            <span className="mx-4 text-sm font-normal">My Tasks</span>
          </a>
          <a className={linkClass} href="#">
            <span className="text-left">
              <AiOutlineProject />
            </span>
            <span className="mx-4 text-sm font-normal">Projects (4)</span>
          </a>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
