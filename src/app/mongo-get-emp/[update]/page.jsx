'use client'

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"



const Update = () => {

  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [department, setDepartment] = useState("");


  const {update} = useParams();
  // console.log(update);
  

  useEffect(() => {
    
    const getEmployeeDetails = async() =>{

      const response = await fetch(`http://localhost:3000/api/db-emp/${update}`);
      const data = await response.json();
      // console.log(data.result);
      const employeeData =  data.result;
      setName(employeeData.name);
      setSalary(employeeData.salary);
      setDepartment(employeeData.department)
    }

    getEmployeeDetails();

  }, [])
  

  return (
    <div>
        <h1>Update Employee</h1>
        <input value={name}  onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" placeholder="Enter Name." /> <br /> <br />
        <input value={salary}  onChange={(e) => setSalary(e.target.value)} type="text" name="salary" id="salary" placeholder="Enter Salary." /> <br /> <br />
        <input value={department}  onChange={(e) => setDepartment(e.target.value)} type="text" name="department" id="department" placeholder="Enter Department." /> <br /> <br />
        <button>Update</button>
    </div>
  )
}

export default Update