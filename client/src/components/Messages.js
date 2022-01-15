import React from "react";

export default function Messages() {
  return (
    <div id="messages" className="mb-4">
      <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
        <p className="font-bold text-md text-black dark:text-white">Messages</p>
        <ul>
          <li className="flex items-center my-6 space-x-2">
            <a href="#" className="block relative">
              <img
                alt="profil"
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div className="flex flex-col">
              <span className="text-sm text-gray-900 font-semibold dark:text-white ml-2">
                Charlie Rabiller
              </span>
              <span className="text-sm text-gray-400 dark:text-gray-300 ml-2">
                Hey John ! Do you read the NextJS doc ?
              </span>
            </div>
          </li>
          <li className="flex items-center my-6 space-x-2">
            <a href="#" className="block relative">
              <img
                alt="profil"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div className="flex flex-col">
              <span className="text-sm text-gray-900 font-semibold dark:text-white ml-2">
                Marie Lou
              </span>
              <span className="text-sm text-gray-400 dark:text-gray-300 ml-2">
                No I think the dog is better...
              </span>
            </div>
          </li>
          <li className="flex items-center my-6 space-x-2">
            <a href="#" className="block relative">
              <img
                alt="profil"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div className="flex flex-col">
              <span className="text-sm text-gray-900 font-semibold dark:text-white ml-2">
                Ivan Buck
              </span>
              <span className="text-sm text-gray-400 dark:text-gray-300 ml-2">
                Seriously ? haha Bob is not a child !
              </span>
            </div>
          </li>
          <li className="flex items-center my-6 space-x-2">
            <a href="#" className="block relative">
              <img
                alt="profil"
                src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div className="flex flex-col">
              <span className="text-sm text-gray-900 font-semibold dark:text-white ml-2">
                Marina Farga
              </span>
              <span className="text-sm text-gray-400 dark:text-gray-300 ml-2">
                Do you need that design ?
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
