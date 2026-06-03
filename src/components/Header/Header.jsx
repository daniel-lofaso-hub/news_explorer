import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">NewsExplorer</h1>
      <div className="header__nav">
        <Navlink className="header__nav-link" to="/">
          Home
        </Navlink>
        <Navlink className="header__nav-link" to="/saved-news">
          Saved articles
        </Navlink>
        <button type="button" className="header__signin-btn">
          Sign in
        </button>
        <button type="button" className="header__logout-btn">
          Username
        </button>
      </div>
    </header>
  );
}
