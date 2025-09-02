"use client";

import { useEffect, useState } from "react";

const MongoImageGet = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const response = await fetch("/api/get-mongo-image");
      const result = await response.json();
      console.log("Fetched Images", result);

      if (result.success) {
        setImages(result.images);
      } else {
        console.log("Error", error);
      }
    };

    getImages();
  }, []);

  return (
    <div>
      <h1>Get mongo image in next js 14</h1>
      {images.map((image) => (
        <div key={images._id}>
          {
            <>
              <img
                style={{ maxWidth: "200px", maxHeight: "200px" }}
                src={`data:${image.contentType};base64,${Buffer.from(
                  image.data
                ).toString("base64")}`}
                alt={image.name}
              />
              <p> {image.name} </p>
            </>
          }
        </div>
      ))}
    </div>
  );
};

export default MongoImageGet;
