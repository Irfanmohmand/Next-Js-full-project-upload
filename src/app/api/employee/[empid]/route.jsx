import { employee } from "@/db/db"
import { NextResponse } from "next/server";


// get the speicific id details
export const GET = async (req, {params}) =>{
    const {empid} = await params;
    // console.log(empid);
    // const data = employee;
    const empData = employee.filter((item) => item.employeeId == empid);
    const result = empData.length == 0 ? {result: "No employee found."} : {result: empData};
    
    return NextResponse.json(result, {status:200})
};


// Delete the employee
export const DELETE = async(req, {params}) =>{

    const {empid} = await params;
    console.log(empid);

    if(empid){
        return NextResponse.json({result: "Employee deleted successfully."}, {status: 200})
    }
    else{
        return NextResponse.json({result: "Employee not found"}, {status:404})
    }
}


// Update the employee
export const PUT = async (req,{params}) =>{
    let payload = await req.json();
    console.log(payload);
    
    const {empid} = await params;

    payload.employeeId = empid;

    if(!payload.employeeId || !payload.name || !payload.email || !payload.department){
        return NextResponse.json({result: "Error", success: false} )
    }
    else{
        return NextResponse.json({result: "Success", success: true})
    }

}