import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../index";
import Loader from "../Loader/Loader"; // Import the Loader component
import "./BrowseBtn.css";

const URL =
  "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=40";

const BrowseBtn = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const [loading, setLoading] = useState(false); // Local loading state
  const navigate = useNavigate();

  const handleBrowse = async () => {
    setLoading(true); // Start loading immediately
    try {
      const response = await fetch(URL);
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.items.length);
        const randomBook = data.items[randomIndex];

        // Set search term and result title
        setSearchTerm(randomBook.volumeInfo.title);
        setResultTitle(`Random Book: ${randomBook.volumeInfo.title}`);

        // Navigate immediately after setting search term
        navigate("/book");
      }
    } catch (error) {
      console.error("Error fetching random book:", error);
    } finally {
      setLoading(false); // Stop loading after fetch completes
    }
  };

  return (
    <div className="browse-btn">
      {loading && <Loader />} {/* Show Loader while loading */}
      <div className="container">
        <div className="browse-btn-content">
          <button
            type="button"
            className="browse-btn-elem flex items-center justify-between bg-white"
            onClick={handleBrowse}
          >
            Browse Random Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrowseBtn;
