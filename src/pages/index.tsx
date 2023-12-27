import BackGround from "../components/background/BackGround";
import HomePage from "../components/homepage/HomePage";

export default function Home() {
  return (
      <BackGround content={<HomePage />} />
  )
}
