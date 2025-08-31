import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const nav1 = useRef();
  useGSAP(() => {
    var tl = gsap.timeline();
    tl.from(nav1.current, {
      y: -30,
      opacity: 0,
      duration: 0.4,
      delay: 0.5,
    });
    tl.from("li", {
      y: -30,
      opacity: 0,
      duration: 0.4,
      stagger: 0.2,
    });
  });
  return (
    <nav className="absolute top-0 w-full px-5 py-4">
      <div className="flex justify-evenly items-center">
        <h1 ref={nav1} className="text-[30px]">
          Orion
        </h1>
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
