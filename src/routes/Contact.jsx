import { Link } from "react-router-dom";
import "../styles/main.scss";
import "../styles/contact.scss";
import { SocialBar } from "../components/layout/SocialBar";

function ContactSection() {
  return (
    <div className="contact-wrapper">
      <Link to="/" className="back-btn">
        Go to homepage
      </Link>
      <h1>Contact</h1>
      <p>
        This page is still under construction, please visit my{" "}
        <a href="https://www.linkedin.com/in/frederick-santos-agapay-734723115/">
          LinkedIn
        </a>{" "}
        or <a href="https://github.com/fredosanto">GitHub</a> profile to get in
        touch!
      </p>
    </div>
  );
}

export function Contact() {
  return (
    <div className="container">
      <SocialBar />
      <ContactSection />
    </div>
  );
}
