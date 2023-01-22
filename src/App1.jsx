import React from "react";
import logo from "./assets/card-pattern.svg";
import logo2 from "./assets/victor.jpg";
export default function App1() {
  return (
    <header className="card__header">
      <img src={logo} className="card__header--image" />
      <img src={logo2} className="card__header--profile" />
    </header>
  );
}
