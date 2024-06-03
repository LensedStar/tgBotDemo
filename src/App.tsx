import React, {useEffect} from 'react';
import './App.css';

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
      <button onClick={()=>handleClose()}>Close</button>
    </div>
  );
}

export default App;
