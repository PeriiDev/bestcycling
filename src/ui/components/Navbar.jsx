import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { SubscriptionButton } from "./SubscriptionButton";
import { DetailsSubscription } from "./DetailsSubscription";

export const Navbar = () => {
  const { active, time } = useSelector((state) => state.subscription);
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

      {!active ? (
        <SubscriptionButton title={"SUSCRÍBETE"} />
      ) : (
        <DetailsSubscription time={time} />
      )}
    </nav>
  );
};
