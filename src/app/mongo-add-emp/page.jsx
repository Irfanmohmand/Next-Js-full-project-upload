'use client'

import { useState } from "react"

const AddEmployee = () => {
    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");
    const [department, setDepartment] = useState("");

    const handleAddEmployee = async () =>{
        // console.log(name,salary,department);
        const response = await fetch("http://localhost:3000/api/db-emp", {
            method: 'POST',
            body: JSON.stringify({name,salary,department})
        });

        const data = await response.json();
        if(data.success){
            alert("Data stored successfully.");
            setName('');
            setSalary('');
            setDepartment('');
        }
        else{
            alert("Faild to stored data")
        }
        
    }
    
  return (
    <div>
        <h1>Add Employee in next js 14</h1>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" placeholder="Enter your name." /> <br /> <br />
        <input value={salary} onChange={(e) => setSalary(e.target.value)} type="text" name="salary" id="salary" placeholder="Enter your salary." /> <br /> <br />
        <input value={department} onChange={(e) => setDepartment(e.target.value)} type="text" name="department" id="department" placeholder="Enter your department." /> <br /> <br />
        <button onClick={handleAddEmployee}>Submit</button>

    </div>
  )
}

export default AddEmployee