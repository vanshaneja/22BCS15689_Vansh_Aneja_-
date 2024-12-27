// File: client/src/components/ReviewForm.js

import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ stationId }) => {
  const [user, setUser] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/api/stations/${stationId}/reviews`, {
        user,
        rating,
        comment
      });
      setMessage('Review submitted successfully!');
      console.log(response.data);
    } catch (error) {
      setMessage('Failed to submit review. Please try again.');
      console.error(error);
    }
  };

  return (
    <div>
      <h3>Submit a Review</h3>

      <label>Your Name:</label>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <label>Rating (1-5):</label>
      <input
        type="number"
        value={rating}
        min="1"
        max="5"
        onChange={(e) => setRating(e.target.value)}
      />

      <label>Comment:</label>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit Review</button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default ReviewForm;
