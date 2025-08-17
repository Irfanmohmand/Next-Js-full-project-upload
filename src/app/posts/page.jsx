import MyPost from "./mypost";

const fetchData = async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
}

async function  postsData() {
    let posts = await fetchData();
    console.log(posts);
    
  return (
    <div>
        <h1>Post data</h1>
        {
            posts.map((post) => 
                <>
                <h1 key={post.id}>#) {post.id} {post.name} </h1>
                <MyPost data={post.id} />
                </>     
            
        )
            
        }
    </div>
  )
}

export default postsData