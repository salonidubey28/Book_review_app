import React from 'react';
import '../App.css';  // Adjusted import path for app.css

function ReviewList({ reviews }) {
  return (
    <div className="review-list">
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <strong>Rating:</strong> {review.rating}/5
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewList;
