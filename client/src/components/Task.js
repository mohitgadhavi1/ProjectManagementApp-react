import React, { useState } from "react";
import {
  IoMdAdd,
  IoIosCheckmarkCircleOutline,
  IoIosCheckmarkCircle,
} from "react-icons/io";
import { FiMessageCircle } from "react-icons/fi";
import { RiShareForwardLine } from "react-icons/ri";

export default function Task() {
  const [complete, setComplete] = useState(false);
  const [newTask, setNewTask] = useState(null);

  const clickHandler = () => {
    setComplete(!complete);
  };

  const taskForm = () => {
    setNewTask(<input />);
  };
  console.log(newTask);
  return (
    <div className="mb-4 mx-0 sm:ml-4 xl:mr-4">
      <div className="shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full">
        <div className="flex w-full">
          <p className=" font-bold text-md p-4 text-black dark:text-white w-1/2">
            My Tasks
            <span className="text-sm text-gray-500 dark:text-gray-300 dark:text-white ml-2">
              (05)
            </span>
          </p>
          <span className="flex items-center w-1/2">
            <button className="relative left-40">
              <IoMdAdd
                onClick={taskForm}
                className="ml-1 text-xl text-gray-300 "
              />
            </button>
          </span>
        </div>

        <ul className="border-gray-100 dark:border-gray-800 border-t-2 ">
          <li
            className={`${
              complete ? "dark:text-gray-400" : "dark:text-gray-200"
            } + ${`flex items-center text-gray-600  dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800`}`}
          >
            <div className="flex items-center justify-start text-sm">
              <span className="mx-4">02</span>
              <span className={complete && "line-through"}>
                Dashboard design
              </span>
              <span className="lg:ml-6 ml-2 flex items-center text-gray-400 dark:text-gray-300">
                3
                <FiMessageCircle className="ml-1 text-lg" />
              </span>
              <span className="mx-4 flex items-center text-gray-400 dark:text-gray-300">
                3
                <RiShareForwardLine className="ml-1 text-lg" />
              </span>
            </div>
            <span onClick={clickHandler}>
              {" "}
              {complete ? (
                <IoIosCheckmarkCircle className="cursor-pointer text-green-500 mx-4 text-xl" />
              ) : (
                <IoIosCheckmarkCircleOutline className="cursor-pointer mx-4 text-gray-400 dark:text-gray-300 text-xl" />
              )}
            </span>
          </li>
          {newTask}
        </ul>
      </div>
    </div>
  );
}
