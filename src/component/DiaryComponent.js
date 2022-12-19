import "./DiaryComponent.css";


import React, { useRef ,useState, useEffect} from "react"



function DiaryComponent(props) {

  return (
    <div className="DiaryComponent">
      <div className="DiaryComponent-day">
        {props.day}
      </div>
      {props.imgSrc ? <img src={props.imgSrc}/> : <></>}
        {props.text}
    </div>
  );
}

export default DiaryComponent;
