import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <h1 className="navigation__title">NewsExplorer</h1>
      <div>
        <NavLink className="navigation__nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="navigation__nav-link" to="/saved-news">
          Saved articles
        </NavLink>
        <button type="button" className="navigation__signin-btn">
          Sign in
        </button>
        <button type="button" className="navigation__logout-btn">
          Username
        </button>
      </div>
    </div>
  );
}

export default Navigation;
