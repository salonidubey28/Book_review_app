import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

const staticData = {
  id: 1,
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  description: "A novel about the American dream, exploring themes of wealth, class, and the illusion of happiness in 1920s America.",
  imageUrl: "https://picsum.photos/200/300?random=1",
  reviews: [
    { rating: 5, comment: "Amazing book!", date: "2024-09-15T12:00:00Z" },
    { rating: 4, comment: "Great read, but a bit slow in the middle.", date: "2024-09-16T14:00:00Z" },
    { rating: 3, comment: "It was okay, but not my favorite.", date: "2024-09-17T09:00:00Z" }
  ]
};

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book] = useState(staticData);
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState(staticData.reviews);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      rating,
      comment,
      date: new Date().toISOString()
    };
    setReviews([...reviews, newReview]);
    setRating(1);
    setComment('');
  };

  return (
    <div className="book-details-page">
      <div className="book-header">
        <img src={book.imageUrl} alt={`${book.title} cover`} className="book-image" />
        <div className="book-info">
          <h1>{book.title}</h1>
          <h2>by {book.author}</h2>
          <p>{book.description}</p>
        </div>
      </div>
      <div className="reviews-section">
        <h3>Reviews</h3>
        {reviews.length === 0 ? (
          <p>No reviews yet. Be the first to review!</p>
        ) : (
          reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-rating">
                {'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}
              </div>
              <p>{review.comment}</p>
              <p className="review-date">{new Date(review.date).toLocaleDateString()}</p>
            </div>
          ))
        )}
      </div>
      <div className="review-form">
        <h3>Leave a Review</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Rating:
            <select value={rating} onChange={(e) => setRating(parseInt(e.target.value))}>
              {[1, 2, 3, 4, 5].map(star => (
                <option key={star} value={star}>{star} Star{star > 1 ? 's' : ''}</option>
              ))}
            </select>
          </label>
          <label>
            Comment:
            <textarea value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
          </label>
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default BookDetailsPage;
