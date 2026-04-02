import React, { useState, useEffect } from "react";
import CTAButton from "./CTAButton";
import "./../styles/components.css";

function CoworkCard({ cowork }) {
  const [loaded, setLoaded] = useState(false);

  // чтобы карточка отображалась сразу, даже до загрузки картинки
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`cowork-card ${loaded ? "loaded" : ""}`}>
      <img
        src={cowork.image}
        alt={cowork.name}
        loading="lazy"
        style={{ width: "100%", height: "180px", objectFit: "cover" }}
      />
      <div className="cowork-info">
        <h3>{cowork.name}</h3>
        <p className="city">{cowork.city}</p>
        <p className="description">{cowork.description}</p>
        <p className="price">Цена: {cowork.price}₽/день</p>
        <p className="rating">Рейтинг: {cowork.rating} ⭐</p>
        <CTAButton
          text="Забронировать"
          onClick={() => alert(`Вы забронировали ${cowork.name}`)}
        />
      </div>
    </div>
  );
}

export default CoworkCard;