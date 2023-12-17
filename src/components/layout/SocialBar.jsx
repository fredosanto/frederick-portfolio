import { NavLink } from "react-router-dom";

export function SocialBar() {
  return (
    <div className="sidebar">
      <div className="social-wrapper">
        <div className="social-link">
          <a href="https://www.linkedin.com/in/frederick-santos-agapay-734723115/">
            LinkedIn
          </a>
        </div>
        <div className="social-link">
          <a href="https://github.com/fredosanto">GitHub</a>
        </div>
        <div className="social-link">
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </div>
  );
}
