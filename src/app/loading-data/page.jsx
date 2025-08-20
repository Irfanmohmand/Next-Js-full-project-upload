"use client"

import { useEffect, useState } from "react";
import Loader from "./Loader";


function LoadingData() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      
        const fetchData = async () =>{
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            console.log(data);
            setUsers(data)
            setLoading(false)
        };

        fetchData();
 
    }, [])
    

  return (
    <div>
        <h1>LoadingData in next js 14</h1>
        {
            loading ? <Loader /> : (
                users.map((user, i) => (
                    <h2 key={i}> {user.username} </h2>
                ))
            )
        }
    </div>
  )
}

export default LoadingData;