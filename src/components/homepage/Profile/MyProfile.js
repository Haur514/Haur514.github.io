import { useEffect, useRef, useState } from "react";
import { Back } from "../../../util/Back";
import useInterval from "../../../util/UseInterval";

import { basePath } from "../../../../next.config.js";
const BASE_PATH = basePath?basePath: "";

function MyProfile() {

  const [message,setMessage] = useState([]);
  const [messageIndex,setMessageIndex] = useState(0);


  useEffect(() => {
    (async () => {
        setMessage(await Back.fetch_yaml("/content/message.yaml"));
    })();
  },[])

  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)

  const [showTamano,setShowTamano] = useState("");
  const [posChar,setPosChar] = useState(0);

  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(BIRD({
  //       el: myRef.current,
  //       THREE:THREE,
  //       mouseControls: true,
  //       touchControls: true,
  //       gyroControls: false,
  //       minHeight: 200.00,
  //       minWidth: 200.00,
  //       scale: 1.00,
  //       scaleMobile: 1.00,
  //     }))
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy()
  //   }
  // }, [vantaEffect])

  function isMessageLoaded(){
    if(typeof message === "undefined") return false;
    if(Object.keys(message).length > 0) return true;
    return false;
  }

  function updatePosTamanoChar(){
    if(!isMessageLoaded()) return;
    setPosChar(posChar+1);
    setShowTamano(getMessage().substring(0,posChar));
  }

  function getMessage(){
    if(!isMessageLoaded()) return;
    if(messageIndex===-1) {
      setMessageIndex(Math.floor(Math.random()*(message["message"].length+1)))
    }
    return message.message[messageIndex];
  }

  // 俺の名前表示するか管理する
  function visibilityName(){
    if(!isMessageLoaded()) return "fadeOut";
    if(posChar >= (getMessage().length+2)){
      return "fadeIn";
    }
    return "fadeOut";
  }

  useInterval(updatePosTamanoChar,100);

  return (
    <div className="relative h-64" ref={myRef}>
      <img src = {`${BASE_PATH}/image/202201_sigss_h-yosiok.jpg`} className="w-full h-full opacity-20 object-cover"/>
      <div className="absolute w-full text-4xl top-1/3 font-bold">
        {showTamano}
      </div>
      <div className={"absolute w-full text-2xl bottom-5 " + visibilityName()}>
        Haruka Yoshioka
      </div>
    </div>
  );
}

export default MyProfile;
