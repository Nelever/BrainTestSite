import React , {useState} from 'react'
import {FaBars} from "react-icons/fa";
import logo from './brain.svg';

const Navbar =(props)=>{
   const [miniLinks,setToggle]= useState(false);
   return <nav>
           <div className="nav-center">
               <div className="nav-header">
                   <img src={logo} alt="logo"></img>
                   <h2>TestYourMind</h2>
                   <button className="nav-toggle" onClick={()=>{setToggle(!miniLinks)}}><FaBars /></button>
               </div>
               <div className={miniLinks===true?"links-container show-container":"links-container"}>
                   <ul className="links">
                       <li>
                           <button onClick={props.domek}><b>Home</b></button>
                       </li>
                       <li>
                           <button onClick={props.reaction}>ReactionTime</button>
                       </li>
                       <li>
                           <button onClick={props.memo}>MemoryTest</button>
                       </li>
                   </ul>
               </div>
           </div>
          </nav>
       
};

export default Navbar;