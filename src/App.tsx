import React, {useEffect, useState} from 'react';
import './App.css';
//@ts-ignore
import pig from "./pig.jpg"

//@ts-ignore
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready()
  }, []);
  const handleClose =()=>{
    tg.close()
  }
  const [coins,setCoins] = useState<number>(1)
  const [farm,setFarm] = useState<boolean>(false)
    useEffect(() => {
        if (farm && coins<100) {
            const intervalId = setInterval(() => {
                setCoins(prevCount => prevCount + 5);
            }, 2000);
            return () => clearInterval(intervalId);
        }
    }, [farm,coins]);
 const handleBuy=()=>{
     if(!farm && coins >= 30) {
         setCoins((p)=>p-30)
         setFarm(true)
     }
     else return
 }
  return (
    <div className="App">
      <p>Coins:{coins}</p>
      <img alt="pig" onClick={()=>setCoins(coins+10)} className="piggi" src={pig}/>
      <button onClick={()=>handleClose()}>Close</button>
       <button onClick={()=>handleBuy()}>Buy Farm cost:30coins</button>


    </div>

  );
}

export default App;
