import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-900 text-white shadow-md">
        <div className="flex justify-between items-center px-6 py-4">

          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide">
            MY GYM
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-lg">
            <Link className="hover:text-red-400 transition" to="/">Home</Link>
            <Link className="hover:text-red-400 transition" to="/about-us">About Us</Link>
            <Link className="hover:text-red-400 transition" to="/programs">Programs</Link>
            <Link className="hover:text-red-400 transition" to="/membership">Membership</Link>
            <Link className="hover:text-red-400 transition" to="/trainers">Trainers</Link>
            <Link className="hover:text-red-400 transition" to="/blog">Blog</Link>
            <Link className="hover:text-red-400 transition" to="/contact">Contact</Link>
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>

        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >

        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            className="text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6 text-lg px-6">

          <Link onClick={() => setMenuOpen(false)} to="/">Home</Link>
          <Link onClick={() => setMenuOpen(false)} to="/about-us">About Us</Link>
          <Link onClick={() => setMenuOpen(false)} to="/programs">Programs</Link>
          <Link onClick={() => setMenuOpen(false)} to="/membership">Membership</Link>
          <Link onClick={() => setMenuOpen(false)} to="/trainers">Trainers</Link>
          <Link onClick={() => setMenuOpen(false)} to="/blog">Blog</Link>
          <Link onClick={() => setMenuOpen(false)} to="/contact">Contact</Link>

        </div>
      </div>
    </>
  );
}