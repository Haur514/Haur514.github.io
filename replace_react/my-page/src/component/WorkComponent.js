import "./WorkComponent.css";

function WorkComponent(props) {
  return (
    <div className="WorkComponent">
        <div>{props.name}</div>
        <div>{props.description}</div>
    </div>
  );
}

export default WorkComponent;
