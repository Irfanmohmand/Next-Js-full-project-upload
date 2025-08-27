import Link from "next/link";
import Delete from "../components/Delete";

const getData = async () =>{

    const response = await fetch("http://localhost:3000/api/db-emp", {'cache': 'no-store'});
    const data = await response.json();
    // console.log(data.result);
    if(data.success){
        return data.result
        // console.log(data.result);
        
    }
    else{
        false
    }
}

const GetEmployee = async () => {

    const emp = await getData();

  return (
    <div>
        <h1>Get Employee in next js 14</h1>
        <table border={'2'}>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Salary</td>
                    <td>Department</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
            {
                emp.map((item,i) => (
                    <tr key={i}>
                        <td> {item.name} </td>
                        <td> {item.salary} </td>
                        <td> {item.department} </td>
                        <td><Link href={`/mongo-get-emp/${item._id}`}>Edit</Link></td>
                        <td> <Delete id={item._id} /> </td>
                    </tr>
                ))
            }
        </tbody>
        </table>
        
       
    </div>
  )
}

export default GetEmployee