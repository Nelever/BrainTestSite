import React , {useState} from 'react'
import "./Memory.css";
import MemBut from './MemBut';


const Memory=()=>{
    const [level,setLevel]=useState(1);
    const [coKlik,setKlik]=useState(1);
    const [tabR,setTabR]=useState([]);
    
    function blad()
    {
        setLevel(1);
        setKlik(1);
        setTabR([]);
    }
    
    if(coKlik===level+4)
    {
        setLevel(level+1);
        setKlik(1);
        setTabR([]);
    }

    function klikawa(a)
    {
        setKlik(a);
    }

    var numer =0;
    var tabA=[];
    if(tabR.length===0)
    {for(let i=0;i<level+3;i++)
    {
      var b=0;
      var a=Math.floor(Math.random()*49)+1
      for(let j=0;j<tabR.length;j++)
      {
        if(a===tabR[j])
        {
          b++;
        }
      }
      if(b===0)
      {tabA=tabR;tabA.push(a);setTabR(tabA);}
      else
      {i--;}
    }}
    if(coKlik===false)
    {
        return <div className="contenerGlowny">
            <div className="napis">Argh so close!</div>
            <div className="napis">Your level was {level}</div>
            <button onClick={blad} className='blad2'>Try again!</button>
        </div>
    }
   return <div className="contenerGlowny">
    <div className="napis">Remember pattern of buttons and click them in correct order</div>
    <div className='napis'>Level {level}</div>
    <div className="contenerr">
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
    </div>
    <div className="contenerr">
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
    </div>
    <div className="contenerr">
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
    </div>
    <div className="contenerr">
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
    </div>
    <div className="contenerr">
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
    </div>
    <div className="contenerr">
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
    </div>
    <div className="contenerr">
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
        <MemBut stanek={coKlik} wat={klikawa} los={tabR} num={numer=numer+1} />
    </div>
   </div>
}

export default Memory ;