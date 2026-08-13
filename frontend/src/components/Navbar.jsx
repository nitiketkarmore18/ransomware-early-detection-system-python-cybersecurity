import React from "react";

const Navbar = () => (
  <nav className="flex justify-between items-center px-8 py-4 bg-blueberry-dark bg-opacity-90 shadow-lg">
    <h1 className="text-2xl font-bold tracking-wide text-white">CSECS</h1>
    <ul className="flex gap-6 text-white">
      <li><a href="#home" className="hover:text-blue-200">Home</a></li>
      <li><a href="#courses" className="hover:text-blue-200">Courses</a></li>
      <li><a href="#about" className="hover:text-blue-200">About</a></li>
      <li><a href="#contact" className="hover:text-blue-200">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
