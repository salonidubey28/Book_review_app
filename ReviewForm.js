import React, { useState } from 'react';
import '../app.css';  // Adjusted import path for app.css

function ReviewForm({ onSubmit }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ rating, comment });
    setRating(0); // Reset form
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <label>
        Rating:
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </label>
      <label>
        Comment:
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;
