import './App.css';
import HomePage from './homepage/homepage';
import BackGround from './background/BackGround';

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
