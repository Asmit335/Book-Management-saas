import { useState } from "react";

const Home=()=>{
  const [count, setCount] = useState(0)
  
  
  return (
    <>
    <button onClick={()=>setCount(count+1)} style={{"color":"red", "fontSize":"5rem", "margin":"10px"}}>+</button>
    <button onClick={()=>setCount(count-1)} style={{"color":"red", "fontSize":"5rem"}}>-</button>
    <p style={{"color":"red", "fontSize":"5rem", "margin":"10px"}}>{count}</p>
     </>
  )
}

export default Home