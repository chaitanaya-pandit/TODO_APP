import React from 'react'
import { useEffect,useState } from 'react'
const Onlinedetector = () => {
     const [online,setOnline] = useState(navigator.onLine);

     useEffect(()=>{
        const handleonline = () => setOnline(true);
        const handleoffline=()=>setOnline(false);
        window.addEventListener('online',handleonline);
        window.addEventListener('offline',handleoffline);
        return ()=>{
            window.removeEventListener('online',handleonline);
            window.removeEventListener('offline',handleoffline);
        }
     },[])
  return (
    <div>
        <div style={{color:online?'green':'red',width:'100px',height:'100px'}}>
        <h1>{online ? 'online':'offline'}</h1>
        <p>{online ? 'you are online':'you are offline'}</p>
        </div>

    </div>
  )
}

export default Onlinedetector