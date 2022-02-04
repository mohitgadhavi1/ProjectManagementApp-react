import React, { useState, Fragment } from "react";
import { IoMdAdd } from "react-icons/io";
import {
  AiOutlineStar,
  AiTwotoneStar,
  AiFillGoogleSquare,
  AiFillCaretDown,
} from "react-icons/ai";
import { Menu, Transition } from "@headlessui/react";
import { BiDotsVertical } from "react-icons/bi";

export default function Project() {
  const [Highlight, setHighlight] = useState(false);

  const clickHandler = () => {
    setHighlight(!Highlight);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const date = () => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let month = months[new Date().getUTCMonth()];
    let day = new Date().getUTCDate();
    return day + " " + month;
  };

  return (
    <div className="mb-4">
      <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <span className="rounded-xl relative p-1 bg-blue-100">
              <AiFillGoogleSquare className="text-3xl text-gray-700" />
            </span>
            <div className="flex flex-col">
              <span className="font-bold text-md text-black dark:text-white ml-2">
                Google
              </span>
              <span className="text-sm text-gray-500 dark:text-white ml-2">
                Google Inc.
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <button className="  pl-1 " onClick={clickHandler}>
              {Highlight ? (
                <AiTwotoneStar className="text-lg text-yellow-500" />
              ) : (
                <AiOutlineStar className="text-xl text-gray-500" />
              )}
            </button>
            {/* <button className="text-gray-200">
              <BiDotsVertical className="text-3xl " />
            </button> */}
            <Menu as="div">
              <Menu.Button className="text-gray-200">
                {" "}
                <BiDotsVertical className="text-3xl " />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  as="ul"
                  className="absolute  mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <Menu.Item as="li">
                    {({ active }) => (
                      <a
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                        href="/edit"
                      >
                        Edit
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item as="li">
                    {({ active }) => (
                      <a
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                        href="/edit"
                      >
                        View Tasks
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item as="li">
                    {({ active }) => (
                      <a
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                        href="/edit"
                      >
                        Add Members
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4 space-x-12">
          <span className="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-gray-500 bg-gray-200">
            PROGRESS
          </span>
          <span className="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-red-400 border border-red-400  bg-white">
            HIGH PRIORITY
          </span>
        </div>
        <div className="block m-auto">
          <div>
            <span className="text-sm inline-block text-gray-500 dark:text-gray-100">
              Task done :
              <span className="text-gray-700 dark:text-white font-bold">
                25
              </span>
              /50
            </span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
            <div className="w-1/2 h-full text-center text-xs text-white bg-purple-500 rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center justify-start my-4 space-x-4">
          <span className="px-2 py-1 flex items-center text-xs rounded-md font-semibold text-green-500 bg-green-50">
            IOS APP
          </span>
          <span className="px-2 py-1 flex items-center text-xs rounded-md text-blue-500 font-semibold bg-blue-100">
            UI/UX
          </span>
        </div>
        <div className="flex -space-x-2">
          <a
            href="#"
            className=" flex align-center justify-center inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
          >
            {/* <img
              className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
              alt="Guy"
            /> */}
            <h1 className="text-2xl antialiased font-bold text-gray-400">A</h1>
          </a>
          <a
            href="#"
            className="bg-gray-700 flex align-center justify-center inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
          >
            {/* <img
              className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="Max"
            /> */}
            <h1 className="text-2xl antialiased font-bold text-gray-400">B</h1>
          </a>
          <a
            href="#"
            className="bg-gray-700 flex align-center justify-center inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
          >
            {/* <img
              className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="Max"
            /> */}
            <h1 className="text-3xl antialiased place-self-center font-bold text-lime-200">
              <IoMdAdd />
            </h1>
          </a>
        </div>

        <span className="px-2 cursor-pointer  py-1 flex w-20 mt-4 items-center text-xs rounded-md font-semibold text-yellow-500 bg-gray-800">
          Summary
          <span className="px-1">
            <AiFillCaretDown />
          </span>
        </span>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          asperiores voluptatum ad! Nam praesentium ipsam, ea beatae quis
          accusantium error quas dicta iusto. Alias et aliquam minima quod nemo
          rerum.
        </p>

        <span className="px-2 py-1 flex w-36 mt-4 items-center text-xs rounded-md font-semibold text-yellow-500 bg-yellow-100">
          DUE DATE : {date()}
        </span>
      </div>
    </div>
  );
}
