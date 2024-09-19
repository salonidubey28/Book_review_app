import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function BookList() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("/api/books")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched books:", data); // Check if data is logged in the console
        setBooks(data);
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <img
            src={book.imageUrl}
            alt={`${book.title} cover`}
            className="book-cover"
          />
          <div className="book-details">
            <h2>{book.title}</h2>
            <p>by {book.author}</p>
            <p>{book.description}</p>
            <Link to={`/book/${book.id}`} className="view-reviews-button">
              View Reviews
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;
