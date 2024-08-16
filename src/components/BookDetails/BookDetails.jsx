import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookDetails.css";
import { FaArrowLeft } from "react-icons/fa";

const URL = "https://www.googleapis.com/books/v1/volumes/";

const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${URL}${id}`);
        const data = await response.json();
        setBook(parseBookData(data));
      } catch (error) {
        console.error("Error fetching book details:", error);
        setBook(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  const parseBookData = (data) => {
    if (!data) return null;

    const {
      volumeInfo: {
        description,
        title,
        imageLinks,
        places,
        time,
        subjects,
        categories,
      },
    } = data;

    return {
      description: cleanDescription(description),
      title: title || "No title found",
      cover_img: imageLinks?.thumbnail || coverImg,
      subject_places: formatList(places),
      subject_times: formatList(time),
      subjects: formatList(subjects),
      genres: formatList(categories, "No genre found"),
    };
  };

  const cleanDescription = (description) => {
    return description
      ? description
          .replace(/\[.*?\]\(.*?\)/g, "")
          .replace(/See also:.*/s, "")
          .replace(/\(\[source\]\[\d+\]\)\s*-+\s*/g, "")
          .trim() || "No description found"
      : "No description found";
  };

  const formatList = (list, fallback = "No items found") => {
    return list ? list.join(", ") : fallback;
  };

  if (loading) return <Loading />;

  return (
    <section className="book-details">
      <div className="container">
        <button
          type="button"
          className="flex items-center flex-col back-btn"
          onClick={() => navigate("/book")}
        >
          <FaArrowLeft size={22} />
          <span className="text-[1.8rem] font-semibold">Go Back</span>
        </button>

        <div className="book-details-content grid">
          <div className="book-details-img">
            <img src={book?.cover_img} alt="cover img" />
          </div>
          <div className="book-details-info">
            <div className="book-details-item title">
              <span className="font-semibold text-[2.4rem]">{book?.title}</span>
            </div>
            <div className="book-details-item description">
              <span>{book?.description}</span>
            </div>
            <div className="book-details-item">
              <span className="font-semibold">Subject Places: </span>
              <span className="text-italic">{book?.subject_places}</span>
            </div>
            <div className="book-details-item">
              <span className="font-semibold">Subject Times: </span>
              <span className="text-italic">{book?.subject_times}</span>
            </div>
            <div className="book-details-item">
              <span className="font-semibold">Subjects: </span>
              <span>{book?.subjects}</span>
            </div>
            <div className="book-details-item">
              <span className="font-semibold">Genres: </span>
              <span>{book?.genres}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
