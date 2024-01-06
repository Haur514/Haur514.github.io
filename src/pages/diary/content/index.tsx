import { Back } from "@/util/Back";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';

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
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {diaryText}
        </ReactMarkdown>
    </div>
  );
}

export default DiaryTextPane;