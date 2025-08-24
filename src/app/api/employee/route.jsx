import { NextResponse } from "next/server"
import { employee } from "@/db/db"

export const GET = async() =>{
    const data = await employee;
    return NextResponse.json(data, {status: 200})
}