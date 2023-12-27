import { Back } from "@/util/Back";
import { useEffect, useState } from "react";

type DiaryCardProps = {
    title: string,
    summary: string,
    date: number
}

function conv_yyyymmdd(yyyymmdd: number){
    const str_yyyymmdd = String(yyyymmdd);
    const ret = str_yyyymmdd.substring(0,4)
        + "/"
        + str_yyyymmdd.substring(4,6)
        + "/"
        + str_yyyymmdd.substring(6,8);
    return ret;
}

function handleButtonClick(){
    window.location.href="http://localhost:3001/";
}

function DiaryCard({title, summary, date}: DiaryCardProps){
    const[contentsList,setContentsList] = useState({diary: []});

  useEffect(() => {
    (async () => {
        setContentsList(await Back.fetch_yaml("./content/diary/contents_list.yaml"));
    })();
  },[])

  return(
    <div className="w-full p-2">
        <button className="w-full text-left bg-gray-800 hover:bg-gray-700 text-white rounded px-4 py-2" onClick={handleButtonClick}>
            <div className="text-sm left-1 top-1">
                {conv_yyyymmdd(date)}
            </div>
            <div className="text-xl">
                {title}
            </div>
            <div>
                {summary}
            </div>
        </button>
    </div>
  );
}

export default DiaryCard;