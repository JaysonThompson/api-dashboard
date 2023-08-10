/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./css/hero.css";

export default function Hero({ title }) {
  useEffect(() => {
    const titleEl = document.querySelector(".hero-title");

    setTimeout(() => {
      titleEl.classList.add("animate");
    }, 2000);
  }, []);

  return (
    <div className="hero-text-wrapper">
      <h1 className="hero-title" data-text={title}>
        {title}
      </h1>
    </div>
  );
}
