import myself from "./../images/202201_sigss_h-yosiok.jpg";
import "./homepage.css";
import IntroduceMyself from "./IntroduceMyself/IntroduceMyself";
import MyProfile from "./Profile/MyProfile";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";

function HomePage() {
  return (
    <div className="HomePage">
      <MyProfile/>
      <IntroduceMyself/>
      <Skills/>
      <Works/>
    </div>
  );
}

export default HomePage;
