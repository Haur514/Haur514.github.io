import { useState } from "react";
import BackGround from "../components/background/BackGround";
import HomePage from "../components/homepage/HomePage";
import ColorTheme from "../util/ColorTheme";
type ColorThemeType = {
  fontColor: string,
  backgroundColor: string
}

function backgroundStyle(colorTheme: ColorThemeType){
  return {color: colorTheme.fontColor, backgroundColor: colorTheme.backgroundColor};
}

export default function Home() {

  const [colorTheme,setColorTheme] = useState(new ColorTheme());

  
  return (
      <BackGround className="bg-black" content={<HomePage />} style={backgroundStyle(colorTheme)}/>
  )
}
