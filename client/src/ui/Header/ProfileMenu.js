import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BsFillPersonFill } from "react-icons/bs";

const user = {
  name: "Mohit Gadhavi",
  email: "mohitgadhavi1@gmail.com",
  imageUrl: <BsFillPersonFill />,
};

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Profile() {
  return (
    <Menu as="div" className="ml-3  relative z-50">
      <div>
        <Menu.Button className="max-w-xs bg-gray-800 rounded-full ring-slate-500  flex items-center text-sm focus:outline-none ring-2  focus:ring-offset-gray-800 focus:ring-white">
          <span className="sr-only">Open user menu</span>
          <span className="h-8 w-8 rounded-full ">
            <BsFillPersonFill
              className="h-6 w-8 mt-1 fill-slate-400"
              src={user.imageUrl}
              alt=""
            />
          </span>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          {userNavigation.map((item) => (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <a
                  href={item.href}
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  {item.name}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
