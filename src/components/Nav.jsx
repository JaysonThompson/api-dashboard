import { NavLink } from "react-router-dom";

export default function Nav() {
  const active = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#68a2b9",
  };
  return (
    <nav>
      <NavLink to="/" style={({ isActive }) => (isActive ? active : null)}>
        Home
      </NavLink>
      <NavLink
        to="schedule"
        style={({ isActive }) => (isActive ? active : null)}
      >
        Schedule
      </NavLink>
    </nav>
  );
}
