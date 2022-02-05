import Navbar from './Navbar'
import React , {useState} from 'react'
import Home from './Home'
import ReactionTime from './ReactionTime'
import Memory from './Memory'


function App() {
  const [page,setPage]= useState("home");
  function Reaction()
  {
    setPage("reaction");
   console.log(page);
  }
  function Dom()
  {
   setPage("home");
   console.log(page);
  }
  function Amory()
  {
   setPage("memory");
   console.log(page);
  }
  return (
    <div >
      <Navbar domek={Dom}  reaction={Reaction} memo={Amory}/>
      {page==="home"&&<Home reaction={Reaction} memo={Amory}/>}
      {page==="reaction"&&<ReactionTime />}
      {page==="memory"&&<Memory />}
    </div>
  );
}

export default App;
