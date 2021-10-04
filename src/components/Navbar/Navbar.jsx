import React from "react";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-8/12 flex justify-between montserrat text-white text-3xl font-semibold">
        <a
          href="#about"
          className="transition duration-400 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          ABOUT
        </a>
        <a
          href="#projects"
          className="transition duration-400 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          PROJECTS
        </a>
        <a
          href="#programs"
          className="transition duration-400 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          PROGRAMS
        </a>
        <a
          href="#contact"
          className="transition duration-400 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          CONTACT
        </a>
      </div>
    </div>
  );
}
