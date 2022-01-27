import React, { useState } from "react";
import { MdOutlineDone } from "react-icons/md";

function AddTask(props) {
  return (
    <form action="">
      <input
        value={props.input}
        onChange={(e) => props.setInput(e.target.value)}
        type="text"
      />
      <button
        disabled={!props.input}
        type="submit"
        onClick={props.addTask}
        className="lg:ml-24 "
      >
        <MdOutlineDone className=" cursor-pointer mx-4 text-gray-400 dark:text-gray-300 text-xl" />
      </button>
    </form>
  );
}

export default AddTask;
