import React from "react";
import Sidebar from "../ui/sidebar";
import Footer from "../ui/Footer";
import AppArea from "../ui/AppArea";

const Home = () => {
  return (
    <div className="bg-gray-100 flex dark:bg-gray-800  overflow-hidden relative">
      <div className="flex flex-col  w-max h-screen items-start justify-between">
        <Sidebar />
        <Footer />
      </div>
      <div className="flex flex-col  w-full pl-0 md:p-6 md:space-y-4">
        <AppArea />
      </div>
    </div>
  );
};
export default Home;
