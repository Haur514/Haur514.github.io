import { basePath } from "../../../next.config.js";
const BASE_PATH = basePath ? basePath: "";

function SkillComponent(props) {
  return (
    <div className="m-2 p-2 font-bold flex">
      <div className="mx-2">
        {props.name}
      </div>
      <img className="h-5" src={BASE_PATH + "/" + props.img}></img>
    </div>
  );
}

export default SkillComponent;
