import BackGround from "../components/background/BackGround.js"
import HomePage from "../components/homepage/HomePage.js"
export default function Home() {
  return (
      <BackGround content={<HomePage />} />
  )
}
