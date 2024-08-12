import React from "react";
import { Link } from "react-router-dom";
import "./BookList.css";

const Book = ({
  id,
  title,
  author = [],
  cover_img,
  edition_count,
  first_publish_year,
}) => {
  return (
    <Link to={`/book/${id}`}>
      <div className="book-item flex items-center flex-col justify-between">
        <div className="book-item-img">
          <img src={cover_img} alt="cover" />
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
