import logo from './logo.svg';
import './App.css';
import HomePage from './homepage/homepage';
import DiaryPane from './diary/Diary/DiaryPane';

function App() {
  return (
    <div className="App">
      <HomePage></HomePage>
      <DiaryPane></DiaryPane>
    </div>
  );
}

export default App;
