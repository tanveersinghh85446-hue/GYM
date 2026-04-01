import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home", icon: "⌂" },
  { to: "/about-us", label: "About Us", icon: "◈" },
  { to: "/programs", label: "Programs", icon: "⚡" },
  { to: "/trainers", label: "Trainers", icon: "◎" },
  { to: "/blog", label: "Blog", icon: "✦" },
  { to: "/contact", label: "Contact", icon: "◇" },
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

  useEffect(() => { setMenuOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@400;500;600;700&display=swap');

        .nav-link-mobile {
          animation: none;
          opacity: 0;
          transform: translateX(30px);
        }
        .menu-open .nav-link-mobile {
          animation: slideIn 0.35s ease forwards;
        }
        @keyframes slideIn {
          to { opacity: 1; transform: translateX(0); }
        }

        .hamburger-line {
          transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease;
          transform-origin: center;
        }
        .is-open .line-1 { transform: translateY(7px) rotate(45deg); }
        .is-open .line-2 { opacity: 0; transform: scaleX(0); }
        .is-open .line-3 { transform: translateY(-7px) rotate(-45deg); width: 20px; margin-left: 0; }

        .mobile-menu-bg {
          background: linear-gradient(160deg, #0a0a0a 0%, #111111 50%, #0f0505 100%);
        }

        .active-link-pill {
          background: linear-gradient(135deg, rgba(239,68,68,0.15), rgba(239,68,68,0.05));
          border: 1px solid rgba(239,68,68,0.25);
        }

        .join-btn-mobile {
          background: linear-gradient(135deg, #ef4444, #dc2626);
          box-shadow: 0 8px 24px rgba(239,68,68,0.3), inset 0 1px 0 rgba(255,255,255,0.1);
        }
        .join-btn-mobile:hover {
          background: linear-gradient(135deg, #f87171, #ef4444);
          box-shadow: 0 12px 32px rgba(239,68,68,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
        }

        .brand-text { font-family: 'Bebas Neue', sans-serif; letter-spacing: 2px; }
        .menu-links-wrap { font-family: 'Outfit', sans-serif; }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md shadow-lg shadow-black/40 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-5">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-red-500 rounded-lg flex items-center justify-center font-black text-white text-xs group-hover:bg-red-400 transition-all duration-200 shadow-md shadow-red-900/40">
              FW
            </div>
            <span className="brand-text text-white text-2xl group-hover:text-red-400 transition-colors duration-200">
              FITNESS<span className="text-red-500">WORLD</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 menu-links-wrap">
            {links.map(({ to, label }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition duration-200 ${
                    active
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
            <Link
              to="/membership"
              className="ml-4 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-5 py-2 rounded-lg transition shadow-md shadow-red-900/30"
            >
              Join Now
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={`md:hidden flex flex-col justify-center items-center w-10 h-10 gap-0 rounded-lg hover:bg-white/10 transition ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line line-1 block w-5 h-0.5 bg-white rounded-full mb-1.5" />
            <span className="hamburger-line line-2 block w-5 h-0.5 bg-white rounded-full mb-1.5" />
            <span className="hamburger-line line-3 block w-3 h-0.5 bg-red-400 rounded-full self-start ml-1" />
          </button>

        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Slide Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[80vw] max-w-xs mobile-menu-bg transform transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col ${
          menuOpen ? "translate-x-0 menu-open" : "translate-x-full"
        }`}
        style={{ borderLeft: "1px solid rgba(255,255,255,0.06)" }}
      >
        {/* Decorative top accent */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-red-500 to-transparent" />

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
            <div className="w-7 h-7 bg-red-500 rounded-md flex items-center justify-center font-black text-white text-xs shadow-md shadow-red-900/40">
              FW
            </div>
            <span className="brand-text text-white text-lg">
              FITNESS<span className="text-red-500">WORLD</span>
            </span>
          </Link>
          <button
            className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-white transition"
            style={{ background: "rgba(255,255,255,0.06)" }}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Nav label */}
        <p className="menu-links-wrap px-5 pt-5 pb-2 text-xs font-semibold tracking-widest text-gray-600 uppercase">
          Navigation
        </p>

        {/* Links */}
        <div className="flex flex-col px-3 gap-1 flex-1 menu-links-wrap overflow-y-auto">
          {links.map(({ to, label, icon }, i) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={`nav-link-mobile flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active
                    ? "active-link-pill text-red-400"
                    : "text-gray-400 hover:text-white"
                }`}
                style={{
                  animationDelay: `${i * 45}ms`,
                  ...(active ? {} : { ":hover": { background: "rgba(255,255,255,0.04)" } })
                }}
                onMouseEnter={e => !active && (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
                onMouseLeave={e => !active && (e.currentTarget.style.background = "")}
              >
                <span className={`text-base w-5 text-center ${active ? "text-red-500" : "text-gray-600"}`}>
                  {icon}
                </span>
                <span>{label}</span>
                {active && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-red-500 shadow-sm shadow-red-500/50" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="px-4 pb-8 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="menu-links-wrap text-gray-600 text-xs text-center mb-3 tracking-wide">
            Ready to transform your body?
          </p>
          <Link
            to="/Contact"
            onClick={() => setMenuOpen(false)}
            className="join-btn-mobile block w-full text-center text-white font-semibold py-3.5 rounded-xl transition-all duration-200 text-sm menu-links-wrap"
          >
            Join Now — Free to Start
          </Link>
          {/* Subtle tagline */}
          <p className="menu-links-wrap text-gray-700 text-xs text-center mt-3">
            No credit card required
          </p>
        </div>
      </div>
    </>
  );
}