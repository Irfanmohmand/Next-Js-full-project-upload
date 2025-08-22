// 1. new Response() = low-level, more control, but you must handle headers & stringifying.

// 2. NextResponse.json() = high-level, made for Next.js APIs, automatically formats JSON responses.

import { NextResponse } from "next/server"

// export async function GET(request){
//     return new Response("Hello Api Route")
// };

export const GET = (request) => {
    return NextResponse.json({name:'Irfan Ullah', age: 24, department: 'IT'})
};