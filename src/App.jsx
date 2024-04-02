import React from 'react'
import './App.css';
import { useState } from 'react';

function App() {
  let [count,setcount]=useState(20);
  const increase=()=>{
   if(count<20) setcount(count+1);
  }
  const decrease=()=>{
    if(count>0) setcount(count-1);
  }
  return (
    <div className='container'>
    <p>counter-value {count}</p>
    <div>
    <button className='button' onClick={increase}>increase</button>
    <button className='button' onClick={decrease}>decrease</button>
    </div>
    </div>
  )
}

export default App;