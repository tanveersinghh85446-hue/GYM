import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/programs", label: "Programs" },
  { to: "/trainers", label: "Trainers" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-black/95 backdrop-blur-md shadow-lg shadow-black/40 py-3"
            : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-red-500 rounded-lg flex items-center justify-center font-black text-white text-sm group-hover:bg-red-400 transition">
              FW
            </div>
            <span className="text-white text-xl font-black tracking-wider group-hover:text-red-400 transition">
              FITNESS<span className="text-red-500">WORLD</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ to, label }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition duration-200 group ${active
                      ? "text-red-400"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {label}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-red-500 rounded-full" />
                  )}
                </Link>
              );
            })}

            {/* CTA Button */}
            <Link
              to="/membership"
              className="ml-4 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-5 py-2 rounded-lg transition shadow-md shadow-red-900/30"
            >
              Join Now
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-white/10 transition"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="w-5 h-0.5 bg-white rounded-full" />
            <span className="w-5 h-0.5 bg-white rounded-full" />
            <span className="w-3 h-0.5 bg-red-400 rounded-full self-start ml-1" />
          </button>

        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Slide Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-gray-950 border-l border-gray-800 transform transition-transform duration-300 flex flex-col ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-red-500 rounded-md flex items-center justify-center font-black text-white text-xs">
              FW
            </div>
            <span className="text-white font-bold text-sm tracking-wider">
              FITNESS<span className="text-red-500">WORLD</span>
            </span>
          </div>
          <button
            className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition text-lg"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col px-4 py-6 gap-1 flex-1">
          {links.map(({ to, label }, i) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition duration-200 ${active
                    ? "bg-red-500/15 text-red-400 border border-red-900/40"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-2 ${active ? "bg-red-500" : "bg-gray-700"}`} />
                {label}
                {active && (
                  <span className="ml-auto text-red-500 text-xs">●</span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Menu Footer CTA */}
        <div className="px-4 pb-8 border-t border-gray-800 pt-6">
          <p className="text-gray-500 text-xs text-center mb-4">Ready to transform?</p>
          <Link
            to="/membership"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl transition shadow-lg shadow-red-900/30"
          >
            Join Now — It's Free to Start
          </Link>
        </div>
      </div>
    </>
  );
}