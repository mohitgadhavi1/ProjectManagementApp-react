import React from "react";
import Task from "../components/Task";
import Music from "../components/Music";
import Calender from "../components/Calender";
import Messages from "../components/Messages";
import Google from "../components/Google";
import Users from "../components/Users";

export default function AppArea() {
  return (
    <div className="overflow-auto  h-screen pb-24 pt-2 pr-2 pl-3 md:pt-0 md:pr-3 md:pl-0">
      <div className="flex flex-col flex-wrap sm:flex-row ">
        <div className="w-full sm:w-1/2 xl:w-1/3">
          <Google />
          <Messages />
          <Calender />
        </div>
        <div className="w-full sm:w-1/2 xl:w-1/3">
          <Task />
          <Music />
        </div>
      </div>
    </div>
  );
}
