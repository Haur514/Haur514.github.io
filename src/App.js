import './App.css';
import HomePage from './homepage/homepage';
import BackGround from './background/BackGround';
import React from "react";

function App() {
  return (
    <>
      <BackGround content={<HomePage/>}/>
        {/* <HomePage/>
      </BackGround> */}
    </>
  );
}

export default App;
