
import DiaryComponent from "../../component/DiaryComponent";
import "./DiaryPane.css";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PizzaImg from '../../images/Pizza.png'

function DiaryPane() {
  return (
    <div className="DiaryPane">
      <div className="DiaryPane-title">
      <FontAwesomeIcon icon={faBook} />
      Diary
      </div>
      <div className="DiaryPane-content">
      <DiaryComponent day="2022/12/19" text="Im struggled with implementing this Diary Pane. Finally I finished my work."></DiaryComponent>
      <DiaryComponent day="2022/12/18" text="I finally bake a Pizza. Im appreciated with my cooking skill." imgSrc={PizzaImg}></DiaryComponent>
      {/* <DiaryComponent day="2022/12/18" text="I implem enaaaaa aaaat ed Diary Pane. Programming is awesome."></DiaryComponent> */}
      {/* <DiaryComponent day="2022/12/18" text="Programming is awesome."></DiaryComponent>
      <DiaryComponent day="2022/12/18" text="Programming is awesome."></DiaryComponent>
      <DiaryComponent day="2022/12/18" text="Programming is awesome."></DiaryComponent>
      <DiaryComponent day="2022/12/18" text="Programming is awesome."></DiaryComponent> */}
      </div>
    </div>
  );
}

export default DiaryPane;
