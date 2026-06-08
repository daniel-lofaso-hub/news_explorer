import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__copyright">
        &copy; Supersite, Powered by News API
      </h2>
      <div className="footer__nav">
        <div className="footer__links">
          <NavLink className="footer__nav-link" to="/">
            Home
          </NavLink>
          <a className="footer__link" href="https://tripleten.com">
            TripleTen
          </a>
        </div>
        <div className="footer__socials">
          <a
            className="footer__link"
            href="https://github.com/daniel-lofaso-hub"
          >
            <img
              className="footer__social-icon"
              alt="GitHub"
              src="../../src/assets/github.svg"
            />
          </a>
          <a
            className="footer__link"
            href="https://linkedin.com/in/daniel-lofaso/"
          >
            <img
              className="footer__social-icon"
              alt="LinkedIn"
              src="../../src/assets/linked-in.svg"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
