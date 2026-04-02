// src/components/About.jsx
import React from "react";
import "./../styles/main.css";

function About() {
  return (
    <section className="about">
      <div className="container">
        <h1 style={{marginLeft:'20px', marginTop:'20px'}}>О нашем проекте</h1>
        <p>
          Мы создали этот сайт, чтобы помочь вам находить лучшие коворкинги в Москве, Санкт-Петербурге и Казани.
          Удобный каталог с фильтрацией, актуальные фотографии, рейтинги и возможность быстро забронировать рабочее место.
        </p>

        {/* Преимущества */}
        <div className="about-cards">
          <div className="about-card">
            <img src="https://images.unsplash.com/photo-1581090700227-74faef96f6a0?auto=format&fit=crop&w=400&q=80" alt="Удобство"/>
            <h3>Удобство</h3>
            <p>Быстро находите рабочие места рядом с вами и выбирайте лучшие условия.</p>
          </div>
          <div className="about-card">
            <img src="https://images.unsplash.com/photo-1573164574395-0f24f22a4d4d?auto=format&fit=crop&w=400&q=80" alt="Комфорт"/>
            <h3>Комфорт</h3>
            <p>Все коворкинги оборудованы современными рабочими зонами и зонами отдыха.</p>
          </div>
          <div className="about-card">
            <img src="https://images.unsplash.com/photo-1605902711622-cfb43c4439b9?auto=format&fit=crop&w=400&q=80" alt="Сообщество"/>
            <h3>Сообщество</h3>
            <p>Общайтесь с профессионалами, расширяйте сеть контактов и вдохновляйтесь.</p>
          </div>
        </div>

        {/* Наша миссия */}
        <div className="mission">
          <h2>Наша миссия</h2>
          <p>
            Мы хотим сделать поиск коворкингов максимально простым и удобным. Каждый пользователь
            сможет выбрать идеальное место для работы и развития своих проектов.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;