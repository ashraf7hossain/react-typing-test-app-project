import './App.css';
import data from "./data";
import { useState, useEffect } from "react";


function App() {
  const [txt , setTxt] = useState([]);
  const [word , setWord] = useState("");
  const [index , setIndex] = useState(0);

  useEffect(()=>{
    const data2 = data.split(" ");
    const data3 = [];
    for(let x  of  data2){
      data3.push({
        val : x,
        col : "black"
      })
    }
    setTxt(data3);
  },[]);
  
  function handle(e){
    let cur = e.target.value;

    if(cur !== null
      && cur.charAt(cur.length-1) === ' '){
      cur = cur.slice(0 , -1);

      setTxt(txt.map((t,id)=>
        cur!==t.val && id===index?{...t,col:"red"}:      
        cur===t.val && id===index?{...t,col:"green"}:
        t
        ))
      setIndex(p=>p+1);
      setWord("");
      return;
    }

    setWord(cur);
  }

  return (
    <div className="App container">
      <h1>Hello world</h1>
      <h2>Education Mania</h2>
      <h3>TYPING TEST APP</h3>

      <p>{txt.map((t)=>(
        <span
        style={{fontWeight: 700, color: t.col}}>{t.val} </span>
        ))}</p>

      <input type="text" onChange={handle} value={word} />

    </div>
  );
}

export default App;
