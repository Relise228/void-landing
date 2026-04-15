"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`nav-wrap${scrolled ? " scrolled" : ""}`}>
      <nav className="nav">
        <div className="nav-logo">
          <span className="glyph">&#9670;</span> VOID
        </div>
        <button
          className="mobile-toggle"
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </button>
        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          <li>
            <a href="#features" onClick={() => setMenuOpen(false)}>
              Features
            </a>
          </li>
          <li>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
              How It Works
            </a>
          </li>
          <li>
            <a href="#pricing" onClick={() => setMenuOpen(false)}>
              Pricing
            </a>
          </li>
          <li className="nav-cta">
            <a
              href="#waitlist"
              className="btn btn-outline"
              style={{ padding: "8px 20px", fontSize: ".8rem" }}
              onClick={() => setMenuOpen(false)}
            >
              Join Waitlist
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
