import React from "react";
import CTAButton from "../components/CTAButton";
import coworkings from "../data/coworkings";
import CoworkCard from "../components/CoworkCard";
import "./../styles/main.css";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Добро пожаловать в Coworkly!</h1>
        <p>Бронируйте рабочие места в коворкингах по всему городу.</p>
        <CTAButton text="Перейти в каталог" onClick={() => window.location.href='/catalog'} />
      </section>

      <section className="popular-coworks">
        <h2>Популярные коворкинги</h2>
        <div className="cowork-grid">
          {coworkings.map(c => <CoworkCard key={c.id} cowork={c} />)}
        </div>
      </section>
    </div>
  );
}

export default Home;