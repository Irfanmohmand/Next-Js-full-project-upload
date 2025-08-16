"use client"
const Posts = ({params}) =>{
    return (
        <div>
            <h1>Blog: {params.posts[0]}</h1>
            <h2>Post: {params.posts[1]}</h2>
        </div>
    )
};

export default Posts