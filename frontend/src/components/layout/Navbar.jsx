import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="text-white bg-[#3120E0] flex justify-between items-center h-24 w-[100%] mb-3 mx-auto px-4">
      <h1 className="w-full text-[#F0EABE] text-2xl font-bold md:pl-24">
        <Link to="/" className="p-4">
          Posts
        </Link>
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4 pr-24">
          <Link to="/" className="p-2">
            Home
          </Link>
        </li>
        <li className="p-4 pr-24">
          <Link to="/posts" className="p-4">
            Posts
          </Link>
        </li>
      </ul>
      <div
        id="mobileOpenCloseBtns"
        onClick={handleNav}
        className="block md:hidden"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        id="mobileMenu"
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-[#F0EABE] bg-[#3120E0] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-2xl font-bold mt-8 ml-2"><Link to="/">Posts</Link></h1>
        <ul className="pt-18 uppercase">
          <li className="p-4 border-b border-t border-[#F0EABE]">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 border-b border-t border-[#F0EABE]">
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
