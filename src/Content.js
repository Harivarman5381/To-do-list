import React from "react";
import {useState } from "react";

const Content = () => {
 
 const [name,setName]=useState("Earn");
  function handleNameChange() {
    const names = ["Earn", "Grow", "Give"];
    const int = Math.floor(Math.random() * 3);
    setName (names[int]);
  }
// const [count,setCount]=useState(99);
// function incrementFunction(){
//   setCount((count)=>{ return count + 1})
  
// }
// function decrementFunction(){
//   setCount((count)=>{return count-1})
// }
  return (
    <main>
      <p>Lets {name} Money</p>
      <button onClick={handleNameChange}>subscribe</button>
      {/* <button onClick={decrementFunction}>-</button>
      <span>{count}</span>
      <button onClick={incrementFunction}>+</button> */}
    </main>
  );
}
 
export default Content;
