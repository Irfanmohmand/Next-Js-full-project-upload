import { connectionString } from "@/lib/database/db-connection"
import { Employee } from "@/lib/database/model/employee";
import mongoose from "mongoose"
import { NextResponse } from "next/server"


// to get the full data of mongodb
export const GET = async() =>{
    await mongoose.connect(connectionString);

    const empData = await Employee.find();

    return NextResponse.json({result: empData, success: true})
}


// post data
export const POST = async (req) =>{
    await mongoose.connect(connectionString);
    const payload = await req.json();

    // const employeeDetail = new Employee({
    //     name: "Waheed Ullah",
    //     salary: '70k',
    //     department: 'Chemical'
    // });
    const employeeDetail = new Employee(payload);


    const response = await employeeDetail.save();
    return NextResponse.json({result: response, success: true});
}