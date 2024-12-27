// File: client/src/components/FilterOptions.js

import React, { useState } from 'react';

const FilterOptions = ({ onFilter }) => {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [availability, setAvailability] = useState('all');
  const [rating, setRating] = useState(0);

  const handleFilterChange = () => {
    onFilter({
      priceRange,
      availability,
      rating
    });
  };

  return (
    <div>
      <h3>Filter Options</h3>

      <label>Price Range:</label>
      <input
        type="number"
        placeholder="Min"
        value={priceRange[0]}
        onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
      />
      <input
        type="number"
        placeholder="Max"
        value={priceRange[1]}
        onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
      />

      <label>Availability:</label>
      <select
        value={availability}
        onChange={(e) => setAvailability(e.target.value)}
      >
        <option value="all">All</option>
        <option value="available">Available</option>
        <option value="not_available">Not Available</option>
      </select>

      <label>Minimum Rating:</label>
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        min="0"
        max="5"
        onChange={(e) => setRating(+e.target.value)}
      />

      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default FilterOptions;
