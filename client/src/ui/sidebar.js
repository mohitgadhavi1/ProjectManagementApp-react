import React from "react";
import Data from "../Data/pageData";
import { MdOutlineExplore, MdEmojiFlags } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { LightningBoltIcon } from "@heroicons/react/outline";

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
              <MdOutlineExplore />
            </span>
            <span className="mx-4 text-sm font-normal">Explore</span>
          </a>
          <a className={linkClass} href="#">
            <span className="text-left">
              <AiOutlineDollar />
            </span>
            <span className="mx-4 text-sm font-normal">Economy</span>
          </a>
          <a className={linkClass} href="#">
            <span className="text-left">
              <LightningBoltIcon className="w-5 h-5" />
            </span>
            <span className="mx-4 text-sm font-normal">Fire Power</span>
          </a>
          <a className={linkClass} href="#">
            <span className="text-left">
              <MdEmojiFlags />
            </span>
            <span className="mx-4 text-sm font-normal">Democracy</span>
          </a>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
