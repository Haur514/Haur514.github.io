import "./Circle.css";
import { useEffect ,useState,useRef} from "react";
import useInterval from "../../util/useInterval";
import React from "react";


function Circle({size,x,y,color,amplitude,center}) {
    const [position,setPosition] = useState({x:x+center["x"],y:y+center["y"]});
    const [timer,setTimer] = useState(0);
    const [declination,setDeclination] = useState(Math.random() * Math.PI * 2);

    const timerDelay = 30;
    const positionRef = useRef<position>(() => {});
    const angularVelocity = Math.PI/36;


    function updatePosition(){
        const posX = x + center["x"] + amplitude * Math.cos(getAngleToCenterPoint()) * Math.cos(timer*angularVelocity+declination);
        const posY = y+center["y"]+amplitude*Math.sin(getAngleToCenterPoint())*Math.sin(timer*angularVelocity-getAnguleDiffY()+declination);
        setPosition({x: posX,y: posY});
    }

    function getAnguleDiffY(){
        if(x*y>0){
            return -1/2*Math.PI;
        }else{
            return 1/2*Math.PI;
        }
    }

    // 振動の中心点への角度を求める
    function getAngleToCenterPoint(){
        const _x = center["x"]-x;
        const _y = center["y"]-y;
        if(_x == 0){
            if(_y > 0){
                return Math.PI / 2;
            }else{
                return - Math.PI / 2;
            }
        }
        return Math.atan(_y/_x);
    }

    function update(){
        setTimer(timer+1);
        updatePosition();
    }

    useInterval(() => {
        update();
    },timerDelay)

    const styles = {
        position:"absolute",
        width:size,
        height:size,
        border: ".1em solid "+color,
        borderRadius:size,
        top:position["y"],
        left:position["x"],
        boxShadow: "0 0 1em "+color,
    }
  return (
    <div className="Circle" style={styles} />
  );
}

export default Circle;
