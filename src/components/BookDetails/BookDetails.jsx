import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookDetails.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);

        if (data) {
          const {
            description,
            title,
            covers,
            subject_places,
            subject_times,
            subjects,
          } = data;

          // Clean up the description
          const cleanDescription = description
            ? description.value
                .replace(/\[.*?\]\(.*?\)/g, "")
                .replace(/See also:.*/s, "")
                .replace(/\(\[source\]\[\d+\]\)\s*-+\s*/g, "")
                .trim() || "No description found"
            : "No description found";

          const newBook = {
            description: cleanDescription,
            title: title,
            cover_img: covers
              ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : coverImg,
            subject_places: subject_places
              ? subject_places.join(", ")
              : "No subject places found",
            subject_times: subject_times
              ? subject_times.join(", ")
              : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found",
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
