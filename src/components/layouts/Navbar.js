import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiCart } from "react-icons/bi";
import { HiOutlineLogin, HiOutlineUserAdd } from "react-icons/hi";

const Navbar = () => {
  return (
    <header className="text-white-100 sticky top-0 z-50 bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700 body-font">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <Link
          href={"/"}
          className="flex title-font font-extrabold items-center uppercase text-gray-100"
        >
          <Image src={"/pizza.svg"} alt="Navbar Logo" width={60} height={60} />
          <p className="leading-5 text-xl mx-2">Pizza Wizza</p>
        </Link>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            href={"/cart"}
            className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center"
          >
            Cart
            <BiCart className="w-5 h-5 mx-1" />
            <span className="inline-flex items-center bg-red-50 py-1 px-2 rounded-full text-xs font-medium text-red-600 ring-1 shadow-[0_0_15px_1px_rgba(220,38,38)]  ring-inset ring-red-600/10">
              0
            </span>
          </Link>
          <Link
            href={"/orders"}
            className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center"
          >
            My Orders
            <BiCart className="w-5 h-5 mx-1" />
          </Link>

          <Link
            href={"/login"}
            className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center"
          >
            Login
            <HiOutlineLogin className="w-5 h-5 mx-1" />
          </Link>
          <Link
            href={"/signup"}
            className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center"
          >
            Signup
            <HiOutlineUserAdd className="w-5 h-5 mx-1" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
