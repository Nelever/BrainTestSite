import React from 'react'
import "./Home.css";


const Home=(props)=>{
   return <div className="glownyContener">
    <div className="animate two">
      <span>W</span><span>e</span><span>l</span><span>c</span><span>o</span><span>m</span><span>e</span> &nbsp;
      <span>t</span><span>o</span> &nbsp;
      <span>m</span><span>y</span> &nbsp;
      <span>s</span><span>i</span><span>t</span><span>e</span>
       </div>
   <div className="animate two">
      <span>C</span><span>h</span><span>o</span><span>o</span><span>s</span><span>e</span> &nbsp;
      <span>t</span><span>e</span><span>s</span><span>t</span> &nbsp;
      <span>y</span><span>o</span><span>u</span> &nbsp;
      <span>w</span><span>a</span><span>n</span><span>t</span> &nbsp;
      <span>t</span><span>o</span> &nbsp;
      <span>t</span><span>r</span><span>y</span>
   </div>
   <div className="contener">
       <button onClick={props.reaction} className="wybor">ReactionTime</button>
       <button onClick={props.memo} className="tez wybor">MemoryTest</button>
   </div>
   </div>
}

export default Home ;