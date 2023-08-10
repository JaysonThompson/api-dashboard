/* eslint-disable react/prop-types */
import "./css/hero.css";

export default function Hero({ title }) {
  return (
    <div className="hero-text-wrapper">
      <h1 className="hero-title">{title}</h1>
    </div>
  );
}
