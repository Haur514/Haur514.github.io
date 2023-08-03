import "./ContentFrame.css";


import React, { useRef ,useState, useEffect} from "react"
import { animated, useSpring } from '@react-spring/web'


function ContentFrame({title,content}){
  return (
    <div className="ContentFrame">
        <div className="title">
            {title}
        </div>
        <div className="content">
            {content}
        </div>
    </div>
  );
}

export default ContentFrame;
