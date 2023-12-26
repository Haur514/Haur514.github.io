function ContentFrame({title,content}){

  const shadow = {
    textShadow: "0 0 1px #8080ed, 0 0 3px #8080ed, 0 0 10px #8080ed"
  }
  return (
    <div className="m-2 my-5">
      <div className="text-xl text-white font-bold drop-shadow-2xl" style={shadow}>
        {title}
      </div>
      <div className="rounded text-left p-2 m-2 flex border border-purple-700 shadow-2xl bg-gray-900 flex-wrap">
        {content}
      </div>
    </div>
  );
}

export default ContentFrame;
