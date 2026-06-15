import "./Header.css";
import { NavLink } from "react-router-dom";

function Header({ variant = "default" }) {
  const styles = {
    default: "header",
    main: "header-main",
    saved: "header-saved",
  };
  const appliedClasses = styles[variant] || styles.default;
  return (
    <header className={appliedClasses}>
      <NavLink className={`${appliedClasses}__nav`} to="/">
        <h1 className={`${appliedClasses}__title`}>NewsExplorer</h1>
      </NavLink>
    </header>
  );
}

export default Header;
