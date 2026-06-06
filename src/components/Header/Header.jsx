import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ isLoggedIn }) {
  return (
    <header className="header">
      <Navigation isLoggedIn={isLoggedIn} />
    </header>
  );
}

export default Header;
