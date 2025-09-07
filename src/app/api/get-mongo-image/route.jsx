import { connectDB } from "@/lib/database/db-connection";
import { Image } from "@/lib/database/model/image";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDB();

    const images = await Image.find().select("name data contentType");

    return NextResponse.json({
      success: true,
      images,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "faild",
    });
  }
};
