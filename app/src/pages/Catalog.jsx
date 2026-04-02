import React, { useState } from "react";
import CoworkCard from "../components/CoworkCard";
import Filters from "../components/Filters";
import coworkings from "../data/coworkings";
import "./../styles/components.css";

function Catalog() {
  const [cityFilter, setCityFilter] = useState("Все города");
  const [sortPrice, setSortPrice] = useState("none");

  const cities = ["Все города", ...new Set(coworkings.map(c => c.city))];

  const filteredCoworks = coworkings
    .filter((c) => cityFilter === "Все города" || c.city === cityFilter)
    .sort((a, b) => {
      if (sortPrice === "asc") return a.price - b.price;
      if (sortPrice === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <section className="popular-coworks">
      <h2>Популярные коворкинги</h2>
      <Filters
        cityFilter={cityFilter}
        setCityFilter={setCityFilter}
        sortPrice={sortPrice}
        setSortPrice={setSortPrice}
        cities={cities}
      />

      <div className="cowork-grid">
        {filteredCoworks.length > 0 ? (
          filteredCoworks.map((cowork) => (
            <CoworkCard key={cowork.id} cowork={cowork} />
          ))
        ) : (
          <p>Коворкинги не найдены.</p>
        )}
      </div>
    </section>
  );
}

export default Catalog;