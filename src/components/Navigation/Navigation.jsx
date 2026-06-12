import "./Navigation.css";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Navigation({ isLoggedIn, variant = "default" }) {
  const styles = {
    default: "navigation",
    saved: "navigation-saved",
  };
  const appliedClasses = styles[variant] || styles.default;
  const currentUser = useContext(CurrentUserContext);
  if (isLoggedIn) {
    return (
      <div className={appliedClasses}>
        <NavLink
          className={`${appliedClasses}__nav-link ${appliedClasses}__nav-link_home`}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={`${appliedClasses}__nav-link ${appliedClasses}__nav-link_saved`}
          to="/saved-news"
        >
          Saved articles
        </NavLink>
        <button type="button" className={`${appliedClasses}__logout-btn`}>
          {currentUser.name}
        </button>
      </div>
    );
  } else {
    return (
      <div className={appliedClasses}>
        <NavLink
          className="navigation__nav-link navigation__nav-link_home"
          to="/"
        >
          Home
        </NavLink>
        <button type="button" className="navigation__signin-btn">
          Sign in
        </button>
      </div>
    );
  }
}

export default Navigation;
