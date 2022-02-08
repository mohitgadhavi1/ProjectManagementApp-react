import React, { useState } from "react";
import { MdOutlineDone, MdOutlineClose } from "react-icons/md";

function AddTask(props) {
  return (
    <form action="" className=" flex ">
      <input
        placeholder="  TYPE HERE"
        className="bg-transparent  caret-pink-500 outline-none "
        autoFocus
        value={props.input}
        onChange={(e) => props.setInput(e.target.value)}
        type="text"
      />
      <div className="  flex">
        <button
          disabled={!props.input}
          type="submit"
          onClick={props.addTask}
          className="lg:ml-24 "
        >
          <MdOutlineDone className="text-lime-500 cursor-pointer mx-4   text-xl" />
        </button>
        <MdOutlineClose
          onClick={() => {
            props.setShowInput(false);
          }}
          className="text-red-500 cursor-pointer   text-xl"
        />
      </div>
    </form>
  );
}

export default AddTask;
