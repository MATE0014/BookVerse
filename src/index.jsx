import React, { useState, useContext, useEffect, useCallback } from "react";

const API_KEY = import.meta.env.VITE_BOOKS_API_KEY;
const URL = `https://www.googleapis.com/books/v1/volumes?q=intitle:&key=${API_KEY}:`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("Harry Potter");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const query = encodeURIComponent(`intitle:${searchTerm}`);
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`);
      const data = await response.json();
      const { items } = data;

      if (items) {
        const newBooks = items.slice(0, 20).map((bookSingle) => {
          const {
            id,
            volumeInfo: {
              title,
              authors,
              imageLinks,
              publishedDate,
              pageCount,
              averageRating,
              categories,
            },
          } = bookSingle;

          return {
            id,
            title,
            author: authors || ["Unknown Author"],
            cover_id: imageLinks ? imageLinks.thumbnail : null,
            edition_count: pageCount || "Unknown",
            first_publish_year: publishedDate
              ? new Date(publishedDate).getFullYear()
              : "Unknown",
            average_rating: averageRating || "No Rating Available",
            genres: categories || ["No Genre Available"],
          };
        });

        setBooks(newBooks);

        if (newBooks.length >= 1) {
          setResultTitle("Here's Your Nice & Cozy Shelf!");
        } else {
          setResultTitle("We're Sorry, No Such Books Found!");
        }
      } else {
        setBooks([]);
        setResultTitle("We're Sorry, No Such Books Found!");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks]);

  return (
    <AppContext.Provider
      value={{
        loading,
        books,
        setSearchTerm,
        setBooks,
        resultTitle,
        setResultTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
