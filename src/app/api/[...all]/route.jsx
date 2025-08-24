import { NextResponse } from "next/server"

export const GET = async(req,{params}) =>{

    const {all} = await params;
    return NextResponse.json({result: all})

}