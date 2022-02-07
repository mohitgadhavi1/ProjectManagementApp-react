import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./ui/Header/Header";
import Sidebar from "./ui/sidebar";
import AppArea from "./ui/AppArea";
import Footer from "./ui/Footer";

export default function Home() {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 h-screen dark:bg-gray-800">
        <Header />
        <main className="bg-gray-100 flex dark:bg-gray-800  overflow-hidden relative">
          <div className="flex flex-col  w-max h-screen items-start justify-between">
            <Sidebar />
            <Footer />
          </div>
          <div className="flex flex-col  w-full pl-0 md:p-6 md:space-y-4">
            <AppArea />
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}
