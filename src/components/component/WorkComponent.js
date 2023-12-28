import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function handleClick(url){
  window.location.href = url;
}
function WorkComponent(props) {
  return (
    <div className="m-2 p-2">
      <div className="font-bold">{props.name}</div>
      <div className="flex">
      <img className="h-36 w-36 p-2 rounded-lg" src={props.imgSrc} />
      <div className="w-full">
        <div className="WorkDescription">
          {props.description}
        </div>
        <div className="p-2">
          {props.tags.map((tag) => 
            <div className="m-1 p-1 px-2 border-purple-800 border rounded-3xl float-left bg-purple-800" key={tag}>
              {tag}
            </div>
          )}
          <div className="float-right text-3xl">
            <FontAwesomeIcon className="hover:text-purple-800 m-2" icon={faGithub} onClick={() => handleClick(props.github_url)}/>
            <FontAwesomeIcon className="hover:text-purple-800 m-2" icon={faRocket} onClick={() => handleClick(props.trial_url)} visibility={props.trial_url !== undefined?"visible":"hidden"}/>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default WorkComponent;
