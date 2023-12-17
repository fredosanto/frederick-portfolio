import { Link } from "react-router-dom";
import "../styles/main.scss";
import "../styles/about.scss";
import { SocialBar } from "../components/layout/SocialBar";

function AboutContent() {
  return (
    <div className="about-content-section">
      <h1>About</h1>
      <p>
        Newly graduated Frontend Developer with a passion for code and design,
        and eager to learn new tech and elevate my frontend skills. After 2,5
        years experience with building several projects, I am now currently
        looking for new challenges.
      </p>
      <p>
        I hope to be a part of bigger projects in the future and build websites
        and application with great user experience. What excites me about
        Frontend Development is all the tech I am able to learn to expand my own
        toolbox.
      </p>
      <div className="portrait">
        <img src="/public/cv.JPG" alt="" />
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="about-wrapper">
      <Link to="/" className="back-btn">
        Go to homepage
      </Link>

      <AboutContent />
    </div>
  );
}

export function About() {
  return (
    <div className="container">
      <SocialBar />
      <AboutSection />
    </div>
  );
}
