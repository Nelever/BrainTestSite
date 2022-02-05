import React , {useState,useRef} from 'react'
import "./ReactionTime.css";


const ReactionTime=()=>{ 
    const [jaki,setJaki]=useState(-1);
    const [timer,setTime]=useState(0);
    const reference = useRef();
    reference.current = jaki;
    
    function sleep(ms) 
    {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function reaction()
    {   
        setTime(0);
        setJaki(1);
        await sleep(Math.floor(Math.random() * 3001)+2000);
        if(reference.current===1)
        {
         setJaki(2);
         setTime(Math.floor(performance.now()));
        }
    }
    

    if(jaki===-1)
    {
        var zielony = <button onClick={reaction} className="wyborr1">Start</button>
    }
    if(jaki===0)
    {
        zielony = <button onClick={reaction} className="wyborr">Start</button>
    }
    if(jaki===1)
    {
         zielony = <button onClick={()=>{setJaki(3);}} className="wyborr"></button>
    }
    if(jaki===2)
    {
         zielony = <button onClick={()=>{setTime(Math.floor(performance.now()-timer));setJaki(4);}} className="wybor2"></button>
    }
    if(jaki===3)
    {
        zielony=<button onClick={()=>{setJaki(0)}} className="blad2">Too fast,click to try again</button>
    }
    if(jaki===4)
    {
        zielony=<button onClick={()=>{setJaki(0)}} className="wybor2">{timer}{" ms"}</button>
    }
        

   return <div className="glownycontenerr">
       <div className="contenerr">Click start button</div>
       <div className="contenerr">and wait for it to turn green</div>
       {zielony}
   </div>
}

export default ReactionTime ;