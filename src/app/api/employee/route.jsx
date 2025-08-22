import { employee } from "@/db/db"
import { NextResponse } from "next/server"

export const GET = () =>{
    const result = employee;
    return NextResponse.json(result)
}