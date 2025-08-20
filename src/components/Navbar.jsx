import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [menuOpen, setMenuOpen] = useState(
    JSON.parse(localStorage.getItem("menuOpen")) || false
  );
  const menuRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully", { autoClose: 3000 });
    setMenuOpen(false);
    localStorage.setItem("menuOpen", false);
    navigate("/login");
  };

  // Save menu state to localStorage to persist across refresh
  useEffect(() => {
    localStorage.setItem("menuOpen", menuOpen);
  }, [menuOpen]);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!token) return null;

  return (
    <nav className="fixed z-50 top-8 right-8 lg:top-12 lg:right-44" ref={menuRef}>
      {/* Floating Hamburger Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`bg-white p-3 rounded-full shadow-lg text-gray-700 focus:outline-none transition-transform duration-300 ${
          menuOpen ? "rotate-90" : "rotate-0"
        } hover:shadow-xl`}
      >
        {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
      </button>

      {/* Animated Dropdown */}
      <div
        className={`absolute top-14 right-0 bg-white/90 backdrop-blur-md shadow-xl rounded-xl py-3 w-44 flex flex-col gap-2 transform transition-all duration-300 ${
          menuOpen
            ? "opacity-100 scale-100 visible"
            : "opacity-0 scale-90 invisible"
        }`}
      >
        <Link
          to="/dashboard"
          className="block px-4 py-2 text-gray-800 font-medium hover:bg-blue-100 rounded-lg transition-colors duration-200"
          onClick={() => setMenuOpen(false)}
        >
          Dashboard
        </Link>
        <button
          onClick={handleLogout}
          className="block w-full text-left px-4 py-2 text-gray-800 font-medium hover:bg-red-100 rounded-lg transition-colors duration-200"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
