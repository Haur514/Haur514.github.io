import Circle from "./circle/Circle";

import { useEffect, useState } from "react";
function BackGround(props) {
  let circleList = [
    {size: 100, x:-200, y:150, color: "#705DA8", amplitude:50},
    {size: 40, x: -50, y:-100, color:"#705DA8", amplitude:20},
    {size: 30, x:-100, y:100, color: "#705DA8", amplitude:50},
    {size: 50, x: 50, y:50, color:"#705DA8", amplitude:20},
    {size: 60, x:-200, y:-100, color: "#705DA8", amplitude:50},
  ]
  const [width, setWidth] = useState(0);  
  const [height, setHeight] = useState(0);  
  useEffect(() => {
      setWidth(window.innerWidth);  
      setHeight(window.innerHeight);  
  },[]);

  return (
    <div className="bg-black z-0" style={props.style}>
      {circleList.map((e) => {
        return <Circle size={e["size"]} x={e["x"]} y={e["y"]} color={e["color"]} amplitude={e["amplitude"]} center={{x: width / 8,y: height / 4 * 3}} key={e}/>
      })}

      {props.content}
    </div>
  );
}

export default BackGround;
