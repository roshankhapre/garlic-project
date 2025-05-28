import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-green-700">
          Premium Garlic
        </h1>

        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <svg
            className="w-7 h-7 text-green-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto md:flex gap-6 bg-white md:bg-transparent text-center md:text-left py-4 md:py-0 px-6 md:px-0 transition-all ease-in-out duration-300 shadow-md md:shadow-none`}
        >
          <li>
            <Link
              to="/"
              className="text-gray-800 hover:text-green-600 font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-800 hover:text-green-600 font-medium"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="text-gray-800 hover:text-green-600 font-medium"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-green-600 font-medium"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
