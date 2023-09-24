import React from "react";
import IntroduceMyself from "./IntroduceMyself/IntroduceMyself";
import MyProfile from "./Profile/MyProfile";
import ResearchAchievements from "./ResearchAchievement/ResearchAchievement";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";
import "./homepage.css";

function HomePage() {


  return (
    <div className="HomePage">
      <MyProfile/>
      <IntroduceMyself/>
      <Skills/>
      <ResearchAchievements/>
      <Works/>
    </div>
  );
}

export default HomePage;
