import React from "react";

export const getStaticProps = async () => {
  const res = await fetch("https://www.jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return { props: { users: data } };
};
console.log(getStaticProps);
export default function Users({ users }) {
  return (
    <div className="mb-4 ">
      <div className="shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full">
        <div className="flex items-center p-4 justify-between">
          <p className="font-bold text-md text-black dark:text-white">
            Contacts
          </p>
        </div>
        <div className="py-2 px-4 bg-blue-100 dark:bg-gray-800 text-gray-600 border-l-4 border-blue-500 flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-bold text-xs dark:text-gray-200 mr-2 ml-2 md:ml-4">
              25 min 20s
            </span>
          </div>
        </div>

        <div className="py-2 px-4 text-gray-600 flex items-center justify-between border-b-2 border-gray-100">
          <p className="text-xs flex items-center dark:text-white">
            International
          </p>
          <div className="flex items-center">
            <span className="text-xs text-gray-400 mr-2 ml-2 md:ml-4">
              30 min
            </span>
          </div>
        </div>
        <div className="py-2 px-4 text-gray-600 flex items-center justify-between border-b-2 border-gray-100">
          <p className="text-xs flex items-center dark:text-white">Sorry</p>
          <div className="flex items-center">
            <span className="text-xs text-gray-400 mr-2 ml-2 md:ml-4">
              30 min
            </span>
          </div>
        </div>
        <div className="py-2 px-4 text-gray-600 flex items-center justify-between">
          <p className="text-xs flex items-center dark:text-white">
            Walk with me
          </p>
          <div className="flex items-center">
            <span className="text-xs text-gray-400 mr-2 ml-2 md:ml-4">
              30 min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
