import { Link } from "react-router-dom";

import Nav from "./Nav";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <span className="city">Seattle</span>
          <span className="team">Kraken</span>
        </Link>
      </div>

      <Nav />
    </div>
  );
}
