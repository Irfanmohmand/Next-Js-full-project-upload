"use client"
import React, { useState } from 'react';


function EventFunctionState() {
  const [name, setName] = useState("Irfan")
  // let username = 'irfan'
  const changeName = () =>{
    setName("zaid")
  };

  return (
    <div>
      <button onClick={() => alert("Hello")}>Click</button>
      {/* <button onClick={changeName}>Change Name</button> */}
      <h1> Change the name: {name} </h1>
      <button onClick={() => changeName()}>Change Name</button>
    </div>
  )
}

export default EventFunctionState