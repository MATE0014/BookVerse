import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-col justify-center text-center items-center text-white">
          <h2 className="header-title capitalize font-bold">
            find book of your choice
          </h2>
          <br />
          <p className="header-text text-[1.8rem] font-light">
            Welcome to ShelfSeeker, your ultimate destination for exploring the
            world of literature. With easy search functionality and curated
            recommendations, finding your next favorite read has never been
            easier. Join our community of book enthusiasts and dive into a
            universe of stories waiting to be explored. Happy reading!
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
