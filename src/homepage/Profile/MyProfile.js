import "./MyProfile.css";
import myself from "./../../images/202201_sigss_h-yosiok.jpg";

function MyProfile() {
  return (
    <div className="MyProfile">
      <img src={myself}/>
      <div className="MyProfile-text">
        Haruka Yoshioka <div className="small">from</div> Osaka University
      </div>
    </div>
  );
}

export default MyProfile;
