import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import pageData from "../../Data/pageData";

export default function Navigation() {
  return (
    <div className=" hidden md:block  ml-10 w-max">
      <ul className=" flex items-baseline space-x-4">
        {pageData.map((item) => (
          <NavLink key={item.id} to={item.name}>
            <li className="list-none" key={item.id}>
              <p
                key={item.id}
                className={
                  "text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-sm font-medium focus:bg-gray-900 "
                }
              >
                {item.name.toUpperCase()}
              </p>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}
