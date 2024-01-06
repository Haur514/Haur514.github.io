import { Back } from "@/util/Back";
import { useEffect, useState } from "react";
import DiaryCard from "./DiaryCard";

function Diary(){
    const[contentsList,setContentsList] = useState({diary: []});

  useEffect(() => {
    (async () => {
        setContentsList(await Back.fetch_yaml("/diary/contents_list.yaml"));
    })();
  },[])

  return(
    <div className="text-white">
        {contentsList["diary"].map((e) => {
          return(
            <DiaryCard key={e} title={e["title"]} summary={e["summary"]} date={e["date"]} />
          )
        })}
    </div>
  );
}

export default Diary;