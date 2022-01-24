import React, { useState, Fragment } from "react";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { Menu, Transition } from "@headlessui/react";
import { BiDotsVertical } from "react-icons/bi";

export default function Google() {
  const [Highlight, setHighlight] = useState(false);

  const clickHandler = () => {
    setHighlight(!Highlight);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="mb-4">
      <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <span className="rounded-xl relative p-2 bg-blue-100">
              <svg
                width="25"
                height="25"
                viewBox="0 0 256 262"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <path
                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                  fill="#4285F4"
                ></path>
                <path
                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                  fill="#34A853"
                ></path>
                <path
                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                  fill="#EB4335"
                ></path>
              </svg>
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
          <a href="#" className="">
            <img
              className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
              alt="Guy"
            />
          </a>
          <a href="#" className="">
            <img
              className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="Max"
            />
          </a>
          <a href="#" className="">
            <img
              className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="Charles"
            />
          </a>
          <a href="#" className="">
            <img
              className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
              src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Jade"
            />
          </a>
        </div>
        <span className="px-2 py-1 flex w-36 mt-4 items-center text-xs rounded-md font-semibold text-yellow-500 bg-yellow-100">
          DUE DATE : 18 JUN
        </span>
      </div>
    </div>
  );
}
