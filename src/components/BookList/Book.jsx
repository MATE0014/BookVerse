import React, { useState } from "react";
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
  genres = ["No Genre Available"],
}) => {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    paymentMode: "cash",
    cardType: "credit",
    cardHolderName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
  });

  const handleOrderNow = () => {
    setShowOrderForm(true);
  };

  const handleCloseForm = () => {
    setShowOrderForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://shelf-seeker-api.vercel.app/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result); // Handle success
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      // Reset form after submission
      setFormData({
        name: "",
        address: "",
        paymentMode: "cash",
        cardType: "credit",
        cardNumber: "",
        cardExpiry: "",
        cardCVV: "",
      });
      setShowOrderForm(false);
    }
  };

  return (
    <div className="book-item flex items-center flex-col justify-between">
      <Link to={`/book/${id}`} className="book-item-link">
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
      </Link>

      <button
        onClick={handleOrderNow}
        className="order-button bg-[#111111] text-white p-3 rounded mt-4 shadow-lg"
      >
        Order Now
      </button>

      {showOrderForm && (
        <div className="overlay fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center z-50">
          <form
            onSubmit={handleSubmit}
            className="order-form bg-[#111111] p-6 rounded shadow-lg"
          >
            <button
              type="button"
              onClick={handleCloseForm}
              className="close-button absolute top-2 right-2 text-red-500"
            >
              &times;
            </button>
            <h2 className="text-center text-2xl font-bold mb-4 text-white">
              Order Now
            </h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="p-2 mb-2 border border-gray-700 rounded w-full text-black"
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              required
              className="p-2 mb-2 border border-gray-700 rounded w-full text-black"
            />
            <div className="mb-2">
              <label className="block text-white">Mode of Payment:</label>
              <select
                name="paymentMode"
                value={formData.paymentMode}
                onChange={handleChange}
                className="p-2 mb-2 border border-gray-700 rounded w-full text-black"
              >
                <option value="cash">Cash on Delivery</option>
                <option value="card">Card Payment</option>
              </select>
            </div>
            {formData.paymentMode === "card" && (
              <>
                <div className="mb-2">
                  <label className="block text-white">Card Type:</label>
                  <select
                    name="cardType"
                    value={formData.cardType}
                    onChange={handleChange}
                    className="p-2 mb-2 border border-gray-700 rounded w-full text-black"
                  >
                    <option value="credit">Credit Card</option>
                    <option value="debit">Debit Card</option>
                  </select>
                </div>
                <input
                  type="text"
                  name="cardHolderName"
                  value={formData.cardHolderName}
                  onChange={handleChange}
                  placeholder="Card Holder Name"
                  required
                  className="p-2 mb-2 border border-gray-700 rounded w-full text-black"
                />
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder="Card Number"
                  required
                  className="p-2 mb-2 border border-gray-700 rounded w-full text-black"
                />
                <input
                  type="month"
                  name="cardExpiry"
                  value={formData.cardExpiry}
                  onChange={handleChange}
                  placeholder="Expiry Date"
                  required
                  className="p-2 mb-2 border border-gray-700 rounded w-full text-black"
                />
                <input
                  type="text"
                  name="cardCVV"
                  value={formData.cardCVV}
                  onChange={handleChange}
                  placeholder="CVV"
                  required
                  pattern="\d{3}"
                  maxLength="3"
                  className="p-2 mb-2 border border-gray-700 rounded w-full text-black"
                />
              </>
            )}
            <button
              type="submit"
              className="submit-button bg-[#111111] text-white p-3 rounded w-full shadow-lg"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Book;
