"use client";

import { useState } from "react";

const UploadMongo = () => {
  const [file, setFile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      return alert("Please Select a file");
    }

    const data = new FormData();

    data.append("file", file);

    try {
      let result = await fetch("/api/upload-mongo-image", {
        method: "POST",
        body: data,
      });

      result = await result.json();

      if (result.success) {
        alert("File uploaded successfully.");
      } else {
        alert("File Upload Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Upload image file to Mongodb</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="file"
          name=""
          id=""
          onChange={(e) => setFile(e.target.files?.[0])}
        />{" "}
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UploadMongo;
