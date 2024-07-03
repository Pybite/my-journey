import { Link } from "react-router-dom";
export default function SiteHeader(props) {
  return (
    <nav className="sit-nav">
      <div className="headline-container">
        <div className="nav-bar-container">
          <div className="nav-bar-nav">
            <Link to="/home/dashboard" className="home">
              Home
            </Link>
            <Link to="/about" className="about">
              About
            </Link>
          </div>
          <div className="nav-bar-nav-r">
            <Link to="/login" className="login">
              Login
            </Link>
            <Link to="/signup" className="sign-up">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
