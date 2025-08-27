'use client';

import { useState } from "react";


const UpdateImage = () => {
  const [file, setFile] = useState("");

  const handleSubmit = async (e) =>{

    e.preventDefault();

    if(!file){
      alert("Please select a file.");
      return;
    }

    const data = new FormData();
    data.append('file', file)

    try {
      
      let result = await fetch("/api/upload-image", {
        method: "POST",
        body: data
      });

      result = await result.json();

      if(result.success){
        alert("Successfully uploaded")
      }
      else{
        alert("Try Again")
      }

    } catch (error) {

      console.log(error);
      alert("Faild")
      
    }

  }

  return (
    <div>
      <h1>Upload image in next js 14</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setFile(e.target.files?.[0])} type="file" name="" id="" /> <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UpdateImage