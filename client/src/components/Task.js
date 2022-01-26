import React, { useState } from "react";
import {
  IoMdAdd,
  IoIosCheckmarkCircleOutline,
  IoIosCheckmarkCircle,
} from "react-icons/io";
import { FiMessageCircle } from "react-icons/fi";
import { RiShareForwardLine } from "react-icons/ri";
import { MdOutlineDone } from "react-icons/md";

export default function Task() {
  const [complete, setComplete] = useState(false);
  const [Tasks, setTasks] = useState(["hello world", "hfgrg"]);
  const [input, setInput] = useState("");

  const taskCompleteHandler = () => {
    setComplete(!complete);
  };
  const addTask = (e) => {
    e.preventDefault();

    setTasks([input, ...Tasks]);
    setInput("");
  };

  const taskForm = () => {};

  return (
    <div className="mb-4 mx-0 sm:ml-4 xl:mr-4">
      <div className="shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full">
        <div className="flex w-full">
          <p className=" font-bold text-md p-4 text-black dark:text-white w-1/2">
            My Tasks
            <span className="text-sm text-gray-500 dark:text-gray-300 dark:text-white ml-2">
              ({Tasks.length < 10 && Tasks.length > 0 ? 0 : null}
              {Tasks.length})
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
              <form action="">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  type="text"
                />
                <button
                  disabled={!input}
                  type="submit"
                  onClick={addTask}
                  className="lg:ml-24 "
                >
                  <MdOutlineDone className=" cursor-pointer mx-4 text-gray-400 dark:text-gray-300 text-xl" />
                </button>
              </form>
            </div>
          </li>
          {Tasks.map((task) => {
            return (
              <li
                className={`${
                  complete ? "dark:text-gray-400" : "dark:text-gray-200"
                } + ${`flex items-center text-gray-600  dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800`}`}
              >
                <div className="flex items-center justify-start text-sm">
                  <span className="mx-4">02</span>
                  <span className={complete && "line-through"}>{task}</span>
                  <span className="lg:ml-6 ml-2 flex items-center text-gray-400 dark:text-gray-300">
                    3
                    <FiMessageCircle className="ml-1 text-lg" />
                  </span>
                  <span className="mx-4 flex items-center text-gray-400 dark:text-gray-300">
                    3
                    <RiShareForwardLine className="ml-1 text-lg" />
                  </span>
                </div>
                <span onClick={taskCompleteHandler}>
                  {" "}
                  {complete ? (
                    <IoIosCheckmarkCircle className="cursor-pointer text-green-500 mx-4 text-xl" />
                  ) : (
                    <IoIosCheckmarkCircleOutline className="cursor-pointer mx-4 text-gray-400 dark:text-gray-300 text-xl" />
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
