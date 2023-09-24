import "./ContentFrame.css";


import React from "react";


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
