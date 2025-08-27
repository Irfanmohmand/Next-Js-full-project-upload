import { connectionString } from "@/lib/database/db-connection";
import { Employee } from "@/lib/database/model/employee";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


// update the employee details
export const PUT = async (req,{params}) =>{

    const {empid} = await params;

    // for id
    const id = {'_id': empid}
    // console.log(id)

    // for data
    const payload = await req.json();
    // console.log(payload);

    // for mongodb connection
    await mongoose.connect(connectionString);

    // getting result
    const result = await Employee.findOneAndUpdate(id,payload);

    return NextResponse.json({result, success: true});
    

}


// get the specific employee details
export const GET = async (req,{params}) =>{

    const {empid} = await params;
    // console.log(empid);

    await mongoose.connect(connectionString);

    const result = await Employee.findById(empid);


    return NextResponse.json({result, success: true});

}


export const DELETE = async (req,{params}) =>{

    const {empid} = params;
    const id = {'_id': empid};

    await mongoose.connect(connectionString);

    const deleteEmployee = await Employee.deleteOne(id);

    return NextResponse.json({success: true});

}