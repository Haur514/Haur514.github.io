import "./MyProfile.css";
import myself from "./../../images/202201_sigss_h-yosiok.jpg";


import React, { useRef ,useState, useEffect} from "react"

import NET from 'vanta/dist/vanta.net.min'
import * as THREE from 'three';

function MyProfile() {

  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
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


  return (
    <div className="MyProfile" ref={myRef}>
      <img src={myself}/>
      <div className="MyProfile-text">
        Haruka Yoshioka <div className="small">from</div> Osaka University
      </div>
    </div>
  );
}

export default MyProfile;
