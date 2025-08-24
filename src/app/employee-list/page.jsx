import Link from "next/link";
import DeleteButton from "../components/DeleteButton";

const getEmployee = async() =>{

    let data = await fetch("http://localhost:3000/api/employee");
    data = await data.json();
    return data;
}

const EmployeeList = async() => {
    const employees = await getEmployee();
    // console.log(data);
    
  return (
    <div>
        <h1>EmployeeList in next js 14</h1>
        {
            employees.map((item,i) =>(
                <div key={i}>
                    <h2> {item.name} </h2>
                    <DeleteButton id={item.employeeId} />
                    <Link href={`/employee-list/${item.employeeId}/update`} >Edit</Link>
                </div>
            ))
        }
    </div>
  )
}

export default EmployeeList