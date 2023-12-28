function ContentFrame({title,content}){

  const shadow = {
    textShadow: "0 0 1px #8080ed, 0 0 3px #8080ed, 0 0 10px #8080ed"
  }
  return (
    <div className="m-4 my-5">
      <div className="text-xl text-white font-bold drop-shadow-2xl text-left" style={shadow}>
        {title}
      </div>
      <div className="rounded text-left p-2 flex bg-gray-900 flex-wrap">
        {content}
      </div>
    </div>
  );
}

export default ContentFrame;
