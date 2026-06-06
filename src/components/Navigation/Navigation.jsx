import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation({ isLoggedIn }) {
  if (isLoggedIn) {
    return (
      <div className="navigation">
        <h1 className="navigation__title">NewsExplorer</h1>
        <div className="navigation__nav-bar">
          <NavLink className="navigation__nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="navigation__nav-link" to="/saved-news">
            Saved articles
          </NavLink>
          <button type="button" className="navigation__logout-btn">
            Username
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="navigation">
        <h1 className="navigation__title">NewsExplorer</h1>
        <div>
          <NavLink className="navigation__nav-link" to="/">
            Home
          </NavLink>
          <button type="button" className="navigation__signin-btn">
            Sign in
          </button>
        </div>
      </div>
    );
  }
}

export default Navigation;
