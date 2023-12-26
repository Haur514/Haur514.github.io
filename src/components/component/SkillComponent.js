
function SkillComponent(props) {
  return (
    <div className="m-2 p-2 flex font-bold float-left text-center">
      <span className="txt">
        {props.name}
      </span>
      <img className="h-5" src={props.img}></img>
    </div>
  );
}

export default SkillComponent;
