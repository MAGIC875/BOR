import React from "react";
import { Link } from "react-router-dom";
import "./../styles/components.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Coworkly</h1>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/about">О сервисе</Link>
      </nav>
    </header>
  );
}

export default Header;