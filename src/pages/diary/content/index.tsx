import { Back } from "@/util/Back";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';


function conv_yyyymmdd(yyyymmdd: string){
  const str_yyyymmdd = String(yyyymmdd);
  const ret = str_yyyymmdd.substring(0,4)
      + "/"
      + str_yyyymmdd.substring(4,6)
      + "/"
      + str_yyyymmdd.substring(6,8);
  return ret;
}

function DiaryTextPane(){
  const searchParams = useSearchParams();
  const diary_id = searchParams.get("diary_id")

  const[diaryText, setDiaryText] = useState("");

  useEffect(() => {
    (async () => {
      if(diary_id === undefined || diary_id === null){
        return;
      }
        setDiaryText(await Back.fetch_md("/diary/"+diary_id+".md"));
    })();
  },[searchParams])
  
  return(
    <div className="markdown-preview text-white text-left p-3 m-3 bg-gray-800">
      <div className="text-white text-right p-1">
        {conv_yyyymmdd(diary_id ?? "")}
      </div>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {diaryText}
      </ReactMarkdown>
    </div>
  );
}

export default DiaryTextPane;