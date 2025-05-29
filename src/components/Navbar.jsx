import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-16 max-h-full object-contain"
          />
        </Link>

        {/* Hamburger Toggle Button */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <svg
            className="w-7 h-7 text-green-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Nav Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent px-6 md:px-0 md:py-0 transition-all ease-in-out duration-300 md:shadow-none shadow-md`}
        >
          <li className="py-2 md:py-0 md:ml-6">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block text-gray-800 hover:text-green-600 font-medium"
            >
              Home
            </Link>
          </li>
          <li className="py-2 md:py-0 md:ml-6">
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block text-gray-800 hover:text-green-600 font-medium"
            >
              About Us
            </Link>
          </li>
          <li className="py-2 md:py-0 md:ml-6">
            <Link
              to="/products"
              onClick={() => setIsOpen(false)}
              className="block text-gray-800 hover:text-green-600 font-medium"
            >
              Products
            </Link>
          </li>
          <li className="py-2 md:py-0 md:ml-6">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-gray-800 hover:text-green-600 font-medium"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
