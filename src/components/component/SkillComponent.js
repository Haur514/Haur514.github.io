
function SkillComponent(props) {
  return (
    <div className="m-2 p-2 font-bold flex">
      <div className="mx-2">
        {props.name}
      </div>
      <img className="h-5" src={props.img}></img>
    </div>
  );
}

export default SkillComponent;
