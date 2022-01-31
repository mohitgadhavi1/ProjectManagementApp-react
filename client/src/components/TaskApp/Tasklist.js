import React from "react";
import { FiMessageCircle } from "react-icons/fi";
import { RiShareForwardLine } from "react-icons/ri";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCheckmarkCircle,
} from "react-icons/io";

function Tasklist(props) {
  return props.Tasks.map((task) => {
    return (
      <li
        key={props.Tasks.indexOf(task)}
        className={`${
          props.complete ? "dark:text-gray-400" : "dark:text-gray-200"
        } + ${`flex items-center text-gray-600  dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800`}`}
      >
        <div className="flex items-center justify-start text-sm">
          <span className="mx-4">
            {props.Tasks.indexOf(task) + 1 < 10 &&
            props.Tasks.indexOf(task) + 1 > 0
              ? 0
              : null}
            {""}
            {props.Tasks.indexOf(task) + 1}
          </span>
          <span className={props.complete ? "line-through" : ""}>{task}</span>
          <span className="lg:ml-6 ml-2 flex items-center text-gray-400 dark:text-gray-300">
            3
            <FiMessageCircle className="ml-1 text-lg" />
          </span>
          <span className="mx-4 flex items-center text-gray-400 dark:text-gray-300">
            3
            <RiShareForwardLine className="ml-1 text-lg" />
          </span>
        </div>
        <span onClick={props.taskCompleteHandler}>
          {" "}
          {props.complete ? (
            <IoIosCheckmarkCircle className="cursor-pointer text-green-500 mx-4 text-xl" />
          ) : (
            <IoIosCheckmarkCircleOutline className="cursor-pointer mx-4 text-gray-400 dark:text-gray-300 text-xl" />
          )}
        </span>
        {console.log(props.Tasks.indexOf(task))}
      </li>
    );
  });
}

export default Tasklist;
