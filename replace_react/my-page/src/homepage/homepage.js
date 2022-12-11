import myself from "./../images/202201_sigss_h-yosiok.jpg";
import "./homepage.css";
import MyProfile from "./Profile/MyProfile";
import Skills from "./Skills/Skills";

function HomePage() {
  return (
    <div className="HomePage">
      <img src={myself} alt="Image" />
      <MyProfile/>
      <Skills/>
      <div className="readPaper">hoge</div>
      <div className="writePaper">poge</div>
    </div>
  );
}

export default HomePage;
