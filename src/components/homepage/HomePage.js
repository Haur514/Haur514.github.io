import IntroduceMyself from "./IntroduceMyself/IntroduceMyself";
import MyProfile from "./Profile/MyProfile";
import ResearchAchievements from "./ResearchAchievement/ResearchAchievement";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";

function HomePage() {

  return (
    <div className="w-full z-10 text-white">
      <MyProfile/>
      <IntroduceMyself/>
      <Skills/>
      <ResearchAchievements/>
      <Works/>
    </div>
  );
}

export default HomePage;
