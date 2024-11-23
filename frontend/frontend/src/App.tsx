import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const inputRef = useRef();
  const [ws,setWs] = useState<WebSocket|null>(null);
    function sendMessage(){
    
      if(!ws){

      return;
      }

      const message = inputRef.current.value;
      ws.send(message);


    }

    useEffect(()=>{
      const ws = new WebSocket("ws://localhost:8080");
      setWs(ws);
      ws.onmessage = (ev)=>{
        alert(ev.data);
      }
    },[])
  return (
    <>
      <input ref={inputRef} type="text" placeholder='Message....' />
      <button onClick={sendMessage}>Send</button>
    </>
  )
}

export default App
