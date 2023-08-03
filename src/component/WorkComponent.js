import "./WorkComponent.css";
import React from "react";

function openWebPage(url){
  window.location.href = url;
}

function WorkComponent(props) {
  return (
    <div className="WorkComponent" onClick={() => openWebPage(props.url)}>
      <div className="WorkTitle">{props.name}</div>
      <div className="WorkContent">
      <img src={props.imgSrc} />
        <div className="WorksDetails">
          <div className="WorkDescription">{props.description}</div>
          <div>
            {props.tags.map((tag) => 
              <span className="tags">
                {tag}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkComponent;
