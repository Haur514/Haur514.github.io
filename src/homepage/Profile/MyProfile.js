import React, { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import { Back } from "../../util/Back";
import useInterval from "../../util/useInterval";
import myself from "./../../images/202201_sigss_h-yosiok.jpg";
import "./MyProfile.css";
function MyProfile() {

  const [message,setMessage] = useState([]);
  const [messageIndex,setMessageIndex] = useState(0);


  useEffect(() => {
    (async () => {
        setMessage(await Back.fetch_yaml("./content/message.yaml"));
    })();
  },[])

  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)

  const [showTamano,setShowTamano] = useState("");
  const [posChar,setPosChar] = useState(0);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        THREE:THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xd13fff,
        backgroundColor: 0x0
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  function isMessageLoaded(){
    if(typeof message === "undefined") return false;
    if(Object.keys(message).length > 0) return true;
    return false;
  }

  function updatePosTamanoChar(){
    if(!isMessageLoaded()) return;
    setPosChar(posChar+1);
    setShowTamano(getMessage().substring(0,posChar));
  }

  function getMessage(){
    if(!isMessageLoaded()) return;
    if(messageIndex===-1) {
      setMessageIndex(Math.floor(Math.random()*(message["message"].length+1)))
    }
    return message.message[messageIndex];
  }

  // 俺の名前表示するか管理する
  function visibilityName(){
    if(!isMessageLoaded()) return "MyProfile-text fadeOut";
    if(posChar >= (getMessage().length+2)){
      return "MyProfile-text fadeIn";
    }
    return "MyProfile-text fadeOut";
  }

  useInterval(updatePosTamanoChar,100);

  return (
    <div className="MyProfile" ref={myRef}>
      <img src={myself} className="ProfileImg"/>
      <div className="Tamano">
        {showTamano}
      </div>
      <div className={visibilityName()}>
        Haruka Yoshioka
      </div>
    </div>
  );
}

export default MyProfile;
