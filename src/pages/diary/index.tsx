import Diary from "@/components/diary/Diary";


export async function generateStaticParams() {
  const pages = ["20231226","aaa"]
  return pages.map((page) => ({
    diary_id: page
  }))
}

export default function Home() {
  return (
      <Diary />
  )
}
