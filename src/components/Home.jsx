import Hero from "./Hero";
import RotatingCard from "./RotatingCard";

export default function Home() {
  return (
    <div className="main-container">
      <Hero title="Go puck yourself!" />
      <RotatingCard
        title="Seattle Kraken"
        subtitle="Release the"
        cardBackText=""
      />
    </div>
  );
}
