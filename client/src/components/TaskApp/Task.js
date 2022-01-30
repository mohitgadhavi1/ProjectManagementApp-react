import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";

import AddTask from "./AddTask";
import Tasklist from "./Tasklist";

export default function Task() {
  const [input, setInput] = useState("");

  const [complete, setComplete] = useState(false);
  const [Tasks, setTasks] = useState(["hello world", "hfgrg"]);

  const addTask = (e) => {
    e.preventDefault();

    setTasks([input, ...Tasks]);
    setInput("");
  };

  const taskCompleteHandler = () => {
    setComplete(!complete);
  };
  console.log(complete);
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
                // onClick={taskForm}
                className="ml-1 text-xl text-gray-300 "
              />
            </button>
          </span>
        </div>

        <ul className="list-disc list-inside border-gray-100 dark:border-gray-800 border-t-2 ">
          <li className="flex items-center text-gray-600  dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
            <div className="flex items-center justify-start text-sm">
              <span className="mx-4">00</span>
              <AddTask addTask={addTask} input={input} setInput={setInput} />
            </div>
          </li>
          <Tasklist
            complete={complete}
            Tasks={Tasks}
            taskCompleteHandler={taskCompleteHandler}
          />
        </ul>
      </div>
    </div>
  );
}
