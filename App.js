import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
var adjustinterval=undefined

function App() {

const[starti,setStart]=useState(false)

const start=()=>{
adjustinterval= setInterval(()=>{setWatch((x)=>x+1)

},1000)
setStart(true)
}
const stop=()=>{
clearInterval(adjustinterval)
setStart(false)
}
const reset=()=>{
setWatch(0)
clearInterval(adjustinterval)
setStart(false)
}


  const [watch,setWatch]= useState(0)
  return (
    <div className="App">
      <h1>Stop Watch</h1>
      <h1>{watch}</h1>
      <button disabled={starti} onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  }

export default App;
