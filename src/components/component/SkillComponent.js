import { basePath } from "../../../next.config.js";
const BASE_PATH = basePath ? basePath: "";

function SkillComponent(props) {
  return (
    <div className="m-1 px-1 flex" style={{backgroundColor: props.color}}>
      <img className="h-5 block m-auto" src={BASE_PATH + "/" + props.img} style={{fill: "#42AFE3"}}/>
      <div className="mx-2">
        {props.name}
      </div>
    </div>
  );
}

export default SkillComponent;
