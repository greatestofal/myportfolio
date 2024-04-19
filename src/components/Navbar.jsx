import React, { useState } from "react";
import Logo from "../assets/logo.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
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
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars className="cursor-pointer" /> : <FaTimes />}
        {/* Toggles between open and close */}
      </div>
      {/* Mobile Menu */}
      {/* This helps the toggle to work, such that it will only appear on screens smaller than 768px */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl"> Home </li>
        <li className="py-6 text-4xl"> About </li>
        <li className="py-6 text-4xl"> Skills </li>
        <li className="py-6 text-4xl"> Projects </li>
        <li className="py-6 text-4xl"> Contact </li>
      </ul>
      {/* Social Icons */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {/* LinkedIn */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-400 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/nnamdiadibe/"
              target="_blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          {/* GitHub */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-400 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/greatestofal"
              target="_blank"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          {/* Email */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-400 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:s.n.adibe@gmail.com"
              target="_blank"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          {/* Resume */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-400 bg-[#565f69]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          {/* Twitter */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-400 bg-[#1DA1F2]">
            <a
              href="https://twitter.com/greatestofal"
              className="flex justify-between items-center w-full text-white"
              target="_blank"
            >
              Twitter <FaTwitter size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
