import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute top-0 w-full px-5 py-4">
      <div className="flex justify-evenly items-center">
        <h1 className="text-[30px]">Orion</h1>
        <ul className="flex items-center justify-center gap-20 w-full">
          <li>
            <a className="nav-a text-white" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="nav-a text-white" href="/page1">
              Page1
            </a>
          </li>
          <li>
            <a className="nav-a text-white" href="/page2">
              Page2
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
