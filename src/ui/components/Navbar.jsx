import { NavLink } from "react-router-dom";

export const Navbar = () => {

  return (
    <nav className="navbar">
      <NavLink
        className={({ isActive }) => {
          return `${isActive ? "active" : ""}`;
        }}
        to="/profile"
      >
        <img src={`/assets/bestcycling-nav.png`} alt="bestcycling" />
      </NavLink>
    </nav>
  );
};
