
function openWebPage(url){
  window.location.href = url;
}

function WorkComponent(props) {
  return (
    <div className="m-2 p-2 border-purple-800 border" onClick={() => openWebPage(props.url)}>
      <div className="font-bold">{props.name}</div>
      <div className="flex">
      <img className="h-36 w-36 p-2 rounded-lg" src={props.imgSrc} />
      <div className="w-full">
        <div className="WorkDescription">{props.description}</div>
        <div className="p-2">
          {props.tags.map((tag) => 
            <div className="inline p-1 px-2 border-purple-800 border rounded-3xl">
              {tag}
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}

export default WorkComponent;
