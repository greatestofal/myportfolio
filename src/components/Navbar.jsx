import React from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "100px" }} />
      </div>
      {/* Menu */}
      <ul className=" hidden md:flex">
        <li> Home </li>
        <li> About </li>
        <li> Skills </li>
        <li> Projects </li>
        <li> Contact </li>
      </ul>
      {/* Hamburger */}
      {/* The md:hidden class will make the hamburger menu appear on screens smaller than 768px */}
      <div className="md:hidden">
        <FaBars />
      </div>
      {/* Mobile Menu */}
      <ul className="absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center">
        <li> Home </li>
        <li> About </li>
        <li> Skills </li>
        <li> Projects </li>
        <li> Contact </li>
      </ul>
      {/* Social Icons */}
      <div className="hidden"> </div>
    </div>
  );
};

export default Navbar;
