import IntroduceMyself from "./IntroduceMyself/IntroduceMyself";
import MyProfile from "./Profile/MyProfile";
import ResearchAchievements from "./ResearchAchievement/ResearchAchievement";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";

function HomePage() {

  const homePageStyle = {
    position : "relative",
    maxWidth : "720px",
    textAlign: "center",
    marginRight: "auto",
    marginLeft: "auto",
    zIndex: 10
  }

  return (
    <div className="w-full" style={homePageStyle}>
      <MyProfile/>
      <IntroduceMyself/>
      <Skills/>
      <ResearchAchievements/>
      <Works/>
    </div>
  );
}

export default HomePage;
