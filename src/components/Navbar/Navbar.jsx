import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logoImg from "../../images/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Loader from "../Loader/Loader"; // Import the loader component

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const navbarRef = useRef(null);
  const navigate = useNavigate();

  const handleNavbar = () => setToggleMenu(!toggleMenu);

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setToggleMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleHomeClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setLoading(true); // Show loader
    setToggleMenu(false); // Close the navbar

    setTimeout(() => {
      navigate("/"); // Navigate to Home after a delay
      setLoading(false); // Hide loader
    }, 1000); // Adjust the delay as needed
  };

  return (
    <>
      {loading && <Loader />}
      <nav className="navbar" id="navbar" ref={navbarRef}>
        <div className="container navbar-content flex items-center">
          <div className="brand-and-toggler flex justify-between items-center">
            <Link to="/" className="navbar-brand flex items-center">
              <img src={logoImg} alt="BookVerse" />
              <span className="uppercase font-bold text-[2.4rem] tracking-[1px]">
                ShelfSeeker
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
                <a
                  href="/"
                  className="nav-link uppercase text-white text-[2.2rem] font-semibold tracking-[1px]"
                  onClick={handleHomeClick}
                >
                  Home
                </a>
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
    </>
  );
};

export default Navbar;
