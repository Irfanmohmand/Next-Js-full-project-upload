import { NextResponse } from "next/server";

export const POST = async(req,res) =>{

    let data = await req.json();
    // const {email, password} = req.json();
    console.log(data);
    // console.log(email,password);
    

    if(!data.email || !data.password){
        return NextResponse.json({result: "Bad Request"}, {status: 400})
    }
    else{
        return NextResponse.json({result: "Success"}, {status: 200})
    }
    

}