import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex bg-black p-4">
      <div className="w-full flex justify-between items-center">
        <div>
          <h1 className="text-white text-3xl text-white font-bold">WOXFIT</h1>
        </div>
        <div>
          <ul className="flex text-white space-x-4">
            <li>
              <Link className="text-blue-700">Home</Link>
            </li>
            <li>
              <Link to="/pages">Pages</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
