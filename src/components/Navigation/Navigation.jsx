import "./Navigation.css";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Navigation({
  isLoggedIn,
  onLoginClick,
  onDropdownClick,
  variant = "default",
  onLogout,
}) {
  const styles = {
    default: "navigation",
    saved: "navigation-saved",
  };
  const appliedClasses = styles[variant] || styles.default;
  const currentUser = useContext(CurrentUserContext);
  if (isLoggedIn) {
    return (
      <nav className={appliedClasses}>
        <NavLink
          className={`${appliedClasses}__nav-link ${appliedClasses}__nav-link_home`}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={`${appliedClasses}__nav-link ${appliedClasses}__nav-link_articles`}
          to="/saved-news"
        >
          Saved articles
        </NavLink>
        <button
          type="button"
          className={`${appliedClasses}__logout-btn`}
          onClick={onLogout}
        >
          {currentUser.name}
        </button>
        <button
          onClick={onDropdownClick}
          type="button"
          className={`${appliedClasses}__menu-btn`}
        ></button>
      </nav>
    );
  } else {
    return (
      <nav className={appliedClasses}>
        <NavLink
          className="navigation__nav-link navigation__nav-link_home"
          to="/"
        >
          Home
        </NavLink>
        <button
          onClick={onLoginClick}
          type="button"
          className="navigation__signin-btn"
        >
          Sign in
        </button>
        <button
          onClick={onDropdownClick}
          type="button"
          className={`${appliedClasses}__menu-btn`}
        ></button>
      </nav>
    );
  }
}

export default Navigation;
