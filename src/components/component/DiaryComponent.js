

import { animated, useSpring } from '@react-spring/web'
import React, { useState } from "react"


function DiaryComponent(props){
  const [toggle, setToggle] = useState(false)
  const styles = useSpring({ height: toggle ? "2em" : "auto" })

  const handleToggle = () => {
    alert("ok");
    setToggle(_toggle => !_toggle);
  }

  // useEffect(() => {
  //   handleToggle();
  // },[])

  return (
    <div className="DiaryComponent" onClick={handleToggle}>
      <div className="DiaryComponent-day">
        {props.day}
      </div>
      <animated.div style={styles}>
      {props.imgSrc ? <img src={props.imgSrc}/> : <></>}
        {props.text}
      </animated.div>
    </div>
  );
}

export default DiaryComponent;
