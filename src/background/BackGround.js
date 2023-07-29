import "./BackGround.css";
import Circle from "./circle/Circle";

function BackGround(props) {
  let circleList = [
    {size: 100, x:-200, y:150, color: "#705DA8", amplitude:50},
    {size: 40, x: -50, y:-100, color:"#705DA8", amplitude:20},
    {size: 30, x:-100, y:100, color: "#705DA8", amplitude:50},
    {size: 50, x: 50, y:50, color:"#705DA8", amplitude:20},
    {size: 60, x:-200, y:-100, color: "#705DA8", amplitude:50},
  ]
  return (
    <div className="BackGroundComponent">
      {circleList.map((e) => {
        return <Circle size={e["size"]} x={e["x"]} y={e["y"]} color={e["color"]} amplitude={e["amplitude"]} center={{x: window.innerWidth / 8,y: window.innerHeight / 4 * 3}}/>
      })}

      {props.content}
    </div>
  );
}

export default BackGround;
