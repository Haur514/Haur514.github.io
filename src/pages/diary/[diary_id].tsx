import { Back } from "@/util/Back";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function DiaryTextPane(){
  const router = useRouter();
  const {diary_id} = router.query;


  const[diaryText, setDiaryText] = useState({text: ""});

  useEffect(() => {
    (async () => {
      if(diary_id === undefined){
        return;
      }
        setDiaryText(await Back.fetch_yaml("../content/diary/"+diary_id+".yaml"));
    })();
  },[diary_id])
  
  return(
    <div className="w-full p-2 text-white text-left">
        {diaryText["text"]}
    </div>
  );
}

export default DiaryTextPane;