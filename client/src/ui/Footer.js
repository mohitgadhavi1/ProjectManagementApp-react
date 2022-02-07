import React from "react";
import Messages from "../components/Messages";

function Footer() {
  return (
    <footer className="overflow-auto flex-wrap absolute top-72  ml-4 h-36 lg:block rounded-2xl shadow-lg w-60 bg-none">
      <Messages />
    </footer>
  );
}

export default Footer;
