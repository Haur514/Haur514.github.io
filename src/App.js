import React, { useState } from "react";
import './App.css';
import BackGround from './background/BackGround';
import HomePage from './homepage/homepage';
import ColorTheme from "./util/colorTheme";

function backgroundStyle(colorTheme){
  return {color: colorTheme.fontColor, backgroundColor: colorTheme.backgroundColor};
}

function App() {

  const [colorTheme,setColorTheme] = useState(new ColorTheme());

  return (
    <BackGround content={<HomePage/>} style={backgroundStyle(colorTheme)}/>
  );
}

export default App;
