import React, {useEffect} from 'react';
import './App.css';
import pig from "../src/img/pig.jpg"

//@ts-ignore
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready()
  }, []);
  const handleClose =()=>{
    tg.close()
  }
  return (
    <div className="App">
      <img src={pig} />
      <button onClick={()=>handleClose()}>Close</button>
    </div>
  );
}

export default App;
