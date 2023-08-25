import React, { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import useInterval from "../../util/useInterval";
import myself from "./../../images/202201_sigss_h-yosiok.jpg";
import "./MyProfile.css";

function MyProfile() {

  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)

  const originalTamanoMessage = "Silence will lead you nowhere.";
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



  function updatePosTamanoChar(){
    setPosChar(posChar+1);
    setShowTamano(originalTamanoMessage.substring(0,posChar));
  }

  // 俺の名前表示するか管理する
  function visibilityName(){
    if(posChar >= (originalTamanoMessage.length+2)){
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
