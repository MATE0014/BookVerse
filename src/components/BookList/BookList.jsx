import React from "react";
import { useGlobalContext } from "../../index";
import Book from "./Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";

const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();

  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      cover_img: singleBook.cover_id
        ? `https://books.google.com/books/content?id=${singleBook.id}&printsec=frontcover&img=1&zoom=1`
        : coverImg,
    };
  });

  if (loading) return <Loading />;

  return (
    <section className="booklist">
      <div className="container">
        <div className="section-title">
          <h2>{resultTitle}</h2>
        </div>
        <div className="booklist-content grid">
          {booksWithCovers.slice(0, 30).map((item) => (
            <Book key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookList;
