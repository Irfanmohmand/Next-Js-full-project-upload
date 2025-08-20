import Image from "next/image";

const ImageOptimization = () => {
    const Img = "/next.svg"
  return (
    <div>
      <h1>Image Optimization in Next.js 14</h1>
      <Image src={Img} alt="Next.js Logo" width={200} height={200} />
      <Image src="/file.svg" width={200} height={200}  />
    </div>
  );
};

export default ImageOptimization;

// In Next Js 14 we can import img like import Img from "/public/next.js" but in 15 we can't use like that 
// we use in 15 like const Img = "/next.svg" inside component