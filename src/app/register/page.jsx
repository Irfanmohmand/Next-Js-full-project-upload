'use client'

import { useState } from "react"

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registration = async() =>{
        // console.log(email,password);
        let data = await fetch("http://localhost:3000/api/users", {
            method: 'Post',
            body: JSON.stringify({email,password})
        });
        data = await data.json();
        console.log(data);
        
    }
  return (
    <div>
        <h1>Registration with post api in next js 14</h1>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Email" /> <br /> <br />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Password" /> <br /> <br />
        <button onClick={registration}>Register</button>
    </div>
  )
}

export default Register