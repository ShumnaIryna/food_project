import { Link } from "react-router-dom";

function Header() {
  const logo = require("../logo_meal.png");

  return (
    <nav className="#b39ddb deep-purple lighten-3">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
