// src/components/Filters.jsx
import React from "react";
import "./../styles/components.css";

function Filters({ cityFilter, setCityFilter, sortPrice, setSortPrice, cities }) {
  return (
    <div className="filter-bar">
      <label>Город:</label>
      <select value={cityFilter} onChange={(e) => setCityFilter(e.target.value)}>
        {cities.map((city, idx) => (
          <option key={idx} value={city}>{city}</option>
        ))}
      </select>

      <label>Сортировка по цене:</label>
      <select value={sortPrice} onChange={(e) => setSortPrice(e.target.value)}>
        <option value="none">Без сортировки</option>
        <option value="asc">По возрастанию</option>
        <option value="desc">По убыванию</option>
      </select>
    </div>
  );
}

export default Filters;