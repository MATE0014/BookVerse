import React from "react";
import { Link } from "react-router-dom";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";

const Book = ({
  id,
  title = "No Title Available",
  author = ["Unknown Author"],
  cover_img = coverImg,
  edition_count = "Unknown",
  first_publish_year = "Unknown",
  genres = ["No Genre Available"], // Add genres prop
}) => {
  return (
    <Link to={`/book/${id}`}>
      <div className="book-item flex items-center flex-col justify-between">
        <div className="book-item-img">
          <img src={cover_img} alt={title} />
        </div>
        <div className="book-item-info text-center">
          <div className="book-item-info-item title font-bold text-[1.8rem]">
            <span>{title}</span>
          </div>

          <div className="book-item-info-item author text-[1.5rem]">
            <span className="capitalize font-bold">Author: </span>
            <span>{author.join(", ")}</span>
          </div>

          <div className="book-item-info-item edition-count text-[1.5rem]">
            <span className="capitalize font-bold">Total Editions: </span>
            <span>{edition_count}</span>
          </div>

          <div className="book-item-info-item genre text-[1.5rem]">
            <span className="capitalize font-bold">Genre: </span>
            <span>{genres.join(", ")}</span>
          </div>

          <div className="book-item-info-item publish-year text-[1.5rem]">
            <span className="capitalize font-bold">First Published In: </span>
            <span>{first_publish_year}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
