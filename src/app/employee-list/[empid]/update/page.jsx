'use client'
import { useParams } from "next/navigation";
import { useEffect, useState } from "react"



const UpdateEmployee = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");


    // const {empid} = params;
    // console.log(empid);
    const params = useParams();
    const employeeId = params.empid;
    // console.log(employeeId);
    
    

useEffect(() => {

    const getEmployee = async () =>{
        let data = await fetch(`http://localhost:3000/api/employee/${employeeId}`);
        data = await data.json();
        // console.log(data.result[0].name);
        setName(data.result[0].name);
        setEmail(data.result[0].email);
        setDepartment(data.result[0].department);

    }

    getEmployee();

}, [employeeId])


const update = async () =>{
    let data = await fetch(`http://localhost:3000/api/employee/${employeeId}`, {
        method: "PUT",
        body: JSON.stringify({name, email, department})
    });

    data = await data.json();
    // console.log(data);
    if(data.success){
        alert("Successfully Updated.")
    }
    else{
        alert("Try Again")
    }
    

}

  return (
    <div>
        <h1>UpdateEmployee in next js 14</h1>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" placeholder='Employee name' /> <br /> <br />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder='Email' /> <br /> <br />
        <input value={department} onChange={(e) => setDepartment(e.target.value)} type="text" name="department" id="department" placeholder='Department' /> <br /> <br />
        <button onClick={update}>Update</button>
    </div>
  )
}

export default UpdateEmployee