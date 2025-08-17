"use client"

const  MyPost = ({data}) =>{
    return(
        <>
        <h1>My Posts</h1>
        <button onClick={() => alert(data)}>Click Me</button>
        </>
    )
};

export default MyPost;