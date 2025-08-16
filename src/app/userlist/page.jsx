'use client';

import { useEffect } from "react";

function Users() {
    useEffect(() => {
      const fetchData = async () =>{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        console.log(data);
        
        console.log(data[0].name); 
      };
      fetchData();
    }, [])
    
  return (
    <div>Fetching data</div>
  )
}

export default Users;