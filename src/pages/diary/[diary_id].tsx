import { useRouter } from "next/router";

function DiaryTextPane(){
  const router = useRouter();
  const {diary_id} = router.query;
  return(
    <div className="w-full p-2 text-white">
        This is {diary_id}
    </div>
  );
}

export default DiaryTextPane;