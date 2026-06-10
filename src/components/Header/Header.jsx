import "./Header.css";

function Header({ variant = "default" }) {
  const styles = {
    default: "header",
    main: "header-main",
    saved: "header-saved",
  };
  const appliedClasses = styles[variant] || styles.default;
  return (
    <header className={appliedClasses}>
      <h1 className={`${appliedClasses}__title`}>NewsExplorer</h1>
    </header>
  );
}

export default Header;
