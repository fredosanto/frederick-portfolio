import { NavLink, Link } from "react-router-dom";

export function HomeSection() {
  return (
    <div className="home-section">
      <div className="section section-left">
        <div className="header-container">
          <h1>Frederick Santos</h1>
        </div>
        <div className="description-container">
          <p>
            Frontend Developer / React Developer / Javascript / Tailwind /
            Bootstrap / CSS/SCSS & HTML /
          </p>
        </div>
        <div className="description-container">
          <p>
            Currently looking for new challenges to elevate my developer skills.
            I am eager to learn and to dig deeper in tech, as per now I`m 2,5
            years in to my developer journey and my passion for code keeps
            growing every day.
            <Link to="projects">
              <span className="checkout-link"> Check out my projects</span>
            </Link>
            !
          </p>
        </div>
      </div>
      <nav className="section section-right">
        <ul>
          <li className="nav-link">
            <NavLink to="about">About</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="projects">Projects</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
