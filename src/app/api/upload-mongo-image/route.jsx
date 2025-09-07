import { connectDB } from "@/lib/database/db-connection";
import { writeFile } from "fs/promises"; // spelling bhi galat tha: "wrtiteFile"
import path from "path";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Image } from "@/lib/database/model/image";

export const POST = async (request) => {
  try {
    await connectDB();

    // 👇 yahan await lagana zaroori hai
    const data = await request.formData();

    const file = data.get("file");

    if (!file) {
      return NextResponse.json({ result: "file not uploaded", success: false });
    }

    // Convert file into buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // File ko "public/uploads" me save karna

    const newImage = new Image({
      name: file.name,
      data: buffer,
      contentType: file.type,
    });

    await newImage.save();

    return NextResponse.json({
      response: "Successfully uploaded.",
      success: true,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
};
