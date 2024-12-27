// File: client/src/components/StationAvailability.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StationAvailability = ({ stationId }) => {
  const [availability, setAvailability] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/stations/${stationId}`);
        setAvailability(response.data.availability);
      } catch (err) {
        setError('Failed to fetch station availability.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAvailability();
  }, [stationId]);

  if (loading) return <p>Loading availability...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h3>Station Availability</h3>
      <p>{availability ? 'Available' : 'Not Available'}</p>
    </div>
  );
};

export default StationAvailability;
