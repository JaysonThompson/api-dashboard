import Nav from "./Nav";
export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <span className="city">Seattle</span>
        <span className="team">Kraken</span>
      </div>
      <Nav />
    </div>
  );
}
