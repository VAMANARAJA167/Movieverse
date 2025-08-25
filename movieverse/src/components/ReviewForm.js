import React, { useState, useEffect } from 'react';

const ReviewForm = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  // Load saved reviews
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('reviews')) || {};
    if (saved[movieId]) {
      setReviews(saved[movieId]);
    }
  }, [movieId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { rating, comment };
    const updated = [...reviews, newReview];

    setReviews(updated);

    // Save to localStorage
    const allReviews = JSON.parse(localStorage.getItem('reviews')) || {};
    allReviews[movieId] = updated;
    localStorage.setItem('reviews', JSON.stringify(allReviews));

    // Reset form
    setRating(0);
    setComment('');
  };

  return (
    <div className="review-form">
      <h3>⭐ Add Your Review</h3>
      <form onSubmit={handleSubmit}>
        <label>Rating (1–10):</label>
        <input
          type="number"
          min="1"
          max="10"
          value={rating}
          required
          onChange={(e) => setRating(Number(e.target.value))}
        />
        <br />
        <label>Comment:</label>
        <textarea
          rows="3"
          value={comment}
          required
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">Submit Review</button>
      </form>

      <h4>📝 Previous Reviews:</h4>
      {reviews.length === 0 && <p>No reviews yet.</p>}
      {reviews.map((r, idx) => (
        <div key={idx} className="review">
          <p>⭐ {r.rating}</p>
          <p>{r.comment}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ReviewForm;
