// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  // Static books data
  const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", description: "A novel about the American dream...", imageUrl: "https://picsum.photos/200" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", description: "A novel about racial injustice...", imageUrl: "https://picsum.photos/200" },
    { id: 3, title: "1984", author: "George Orwell", description: "A dystopian novel about totalitarianism...", imageUrl: "https://picsum.photos/200" },
    { id: 4, title: "Pride and Prejudice", author: "Jane Austen", description: "A classic novel about love and society...", imageUrl: "https://picsum.photos/200" },
    { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", description: "A novel about teenage rebellion...", imageUrl: "https://picsum.photos/200" },
    { id: 6, title: "The Hobbit", author: "J.R.R. Tolkien", description: "A fantasy novel about a hobbit's adventure...", imageUrl: "https://picsum.photos/200" },
    { id: 7, title: "Moby Dick", author: "Herman Melville", description: "A novel about the quest for revenge against a giant whale...", imageUrl: "https://picsum.photos/200" },
    { id: 8, title: "War and Peace", author: "Leo Tolstoy", description: "A historical novel about the Napoleonic wars...", imageUrl: "https://picsum.photos/200" },
    { id: 9, title: "The Odyssey", author: "Homer", description: "An epic poem about Odysseus's journey home...", imageUrl: "https://picsum.photos/200" },
  ];

  return (
    <div className="homepage">
      <div className="book-list">
        {books.map(book => (
          <div key={book.id} className="book-card">
            <img src={book.imageUrl} alt={book.title} />
            <div className="book-info">
              <h2>{book.title}</h2>
              <p>{book.author}</p>
              <p>{book.description}</p>
              <Link to={`/book/${book.id}`} className="view-reviews-button">View Reviews</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
