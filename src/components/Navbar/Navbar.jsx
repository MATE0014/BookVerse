import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoImg from "../../images/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className="navbar" id="navbar">
      <div className="container navbar-content flex items-center">
        <div className="brand-and-toggler flex justify-between items-center">
          <Link to="/" className="navbar-brand flex items-center">
            <img src={logoImg} alt="BookVerse" />
            <span className="uppercase font-bold text-[2.4rem] tracking-[1px]">
              BookVerse
            </span>
          </Link>
          <button
            type="button"
            className="navbar-toggler-btn"
            onClick={handleNavbar}
          >
            <HiOutlineMenuAlt3
              size={35}
              style={{
                color: toggleMenu ? "#ccc" : "#fff",
              }}
            />
          </button>
        </div>
        <div
          className={
            toggleMenu
              ? "navbar-collapse show-navbar-collapse"
              : "navbar-collapse"
          }
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="book"
                className="nav-link uppercase text-white text-[2.2rem] font-semibold tracking-[1px]"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                className="nav-link uppercase text-white text-[2.2rem] font-semibold tracking-[1px]"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
