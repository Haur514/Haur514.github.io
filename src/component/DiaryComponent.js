import "./DiaryComponent.css";


import React, { useRef ,useState, useEffect} from "react"

import NET from 'vanta/dist/vanta.net.min'
// import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';



function DiaryComponent(props) {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(NET({
  //       el: myRef.current,
  //       THREE:THREE,
  //       mouseControls: true,
  //       touchControls: true,
  //       gyroControls: false,
  //       minHeight: 200.00,
  //       minWidth: 200.00,
  //       scale: 1.00,
  //       scaleMobile: 1.00,
  //       color: 0xd13fff,
  //       backgroundColor: 0x0
  //     }))
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy()
  //   }
  // }, [vantaEffect])

  return (
    <div className="vanta" ref={myRef}>
    Foreground content goes here
  </div>
  );
}

export default DiaryComponent;
