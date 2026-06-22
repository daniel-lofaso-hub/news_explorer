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
          <a
            className="footer__link"
            href="https://tripleten.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            TripleTen
          </a>
        </div>
        <div className="footer__socials">
          <a
            className="footer__link"
            href="https://github.com/daniel-lofaso-hub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="footer__social-icon"
              alt="GitHub"
              src="../../assets/github.svg"
            />
          </a>
          <a
            className="footer__link"
            href="https://linkedin.com/in/daniel-lofaso/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="footer__social-icon"
              alt="LinkedIn"
              src="../../assets/linked-in.svg"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
