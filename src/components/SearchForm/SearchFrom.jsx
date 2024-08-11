import React, { useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../index";
import "./SearchForm.css";

const SearchFrom = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef("");
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length == 0) {
      setSearchTerm("Harry Potter");
      setResultTitle("Please Enter Something In The Search Bar...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/book");
  };

  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form-elem flex items-center justify-between bg-white">
              <input
                type="text"
                className="form-control"
                placeholder="Book Name (Ex- Harry Potter)"
                ref={searchText}
              />
              <button
                type="submit"
                className="flex items-center flex-col"
                onClick={handleSubmit}
              >
                <FaSearch className="text-orange-800" size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchFrom;