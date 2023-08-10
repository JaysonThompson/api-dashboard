/* eslint-disable react/prop-types */
import "../components/css/rotatingCard.css";

export default function RotationBanner({ title, subtitle, cardBackText }) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-front">
          <h3 className="card-title">{title}</h3>
          <p className="card-subtitle">{subtitle}</p>
        </div>
        <div className="card-back">
          <p className="card-back-text">{cardBackText}</p>
        </div>
      </div>
    </div>
  );
}
