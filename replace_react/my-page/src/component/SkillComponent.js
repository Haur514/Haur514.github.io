import "./SkillComponent.css";

function SkillComponent(props) {
  return (
    <div className="SkillComponent">
      {props.name}
      <img src={props.img}></img>
    </div>
  );
}

export default SkillComponent;
