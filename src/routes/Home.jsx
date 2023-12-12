import { SocialBar } from "../components/layout/SocialBar";
import { HomeSection } from "../components/home/HomeSection";
import "../styles/main.scss";
import "../styles/home.scss";

export function Home() {
  return (
    <div className="container">
      <SocialBar />
      <HomeSection />
    </div>
  );
}
