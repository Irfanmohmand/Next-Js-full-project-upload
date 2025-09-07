"use client";
import React, { useState } from "react";
import Link from "next/link";

function EventFunctionState() {
  const [name, setName] = useState("Irfan");
  // let username = 'irfan'
  const changeName = () => {
    setName("zaid");
  };

  return (
    <div>
      <button onClick={() => alert("Hello")}>Click</button>
      {/* <button onClick={changeName}>Change Name</button> */}
      <h1> Change the name: {name} </h1>
      <button onClick={() => changeName()}>Change Name</button>
      <Link
        href={"/upload-image"}
        style={{
          backgroundColor: "blue",
          color: "white",
          paddingTop: "6px",
          paddingBottom: "6px",
          paddingLeft: "8px",
          paddingRight: "8px",
          borderRadius: "20px",
          marginLeft: "4px",
          fontWeight: "bold",
        }}
      >
        Upload Image
      </Link>
    </div>
  );
}

export default EventFunctionState;
