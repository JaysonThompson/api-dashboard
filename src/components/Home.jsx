import "../3D.css";

export default function Home() {
  return (
    <div className="main-container">
      <div className="card">
        <div className="card-content">
          <div className="card-front">
            <h3 className="card-title">Seattle Kraken</h3>
            <p className="card-subtitle">Release the KRAKEN</p>
          </div>
          <div className="card-back">
            <p className="card-body">
              Some really awesome Kraken information will go here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
