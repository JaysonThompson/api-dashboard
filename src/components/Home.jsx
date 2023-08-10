import Hero from "./Hero";
import RotatingCard from "./RotatingCard";

export default function Home() {
  return (
    <div className="main-container">
      <Hero title="Rise from the deep" />
      <RotatingCard
        title="Seattle Kraken"
        subtitle="Release the"
        cardBackText=""
      />
    </div>
  );
}
