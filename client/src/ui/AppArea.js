import React from "react";
import Task from "../components/TaskApp/Task";
import Project from "../components/Project";
import Messages from "../components/Messages";

export default function AppArea() {
  return (
    <div className="overflow-auto   pr-3 ">
      <div className="flex flex-col flex-wrap sm:flex-row ">
        <div className="w-full sm:w-1/2 xl:w-1/3">
          <Project />
          {/* <Messages /> */}
        </div>
        <div className="w-full sm:w-1/2 xl:w-1/3">
          <Task />
        </div>
      </div>
    </div>
  );
}
