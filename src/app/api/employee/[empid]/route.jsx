import { employee } from "@/db/db"
import { NextResponse } from "next/server"

export const GET = async(req,{params}) =>{
    const {empid} = await params;
    console.log(empid);
    

    // const data = employee;
    // return NextResponse.json(data, {status: 200})

    const empData = employee.filter((item) => item.employeeId == empid);
    const result = empData.length == 0 ? {result: "No Employee Found"} : {result: empData};

    return NextResponse.json(result)
}