import "./WorkComponent.css";

function WorkComponent(props) {
  return (
    <div className="WorkComponent">
      <div>{props.name}</div>
      <img src={props.imgSrc} />
      <div>{props.description}</div>
      <div>
        {props.tags.map((tag) => 
          <span className="tags">
            {tag}
          </span>
        )}
      </div>
    </div>
  );
}

export default WorkComponent;
