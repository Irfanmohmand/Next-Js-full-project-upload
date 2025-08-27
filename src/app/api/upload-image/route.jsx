import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export const POST = async (req) => {
  const data = await req.formData();
  const file = data.get("file");

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  // ✅ Correct path
  const uploadPath = path.join(process.cwd(), "public", "uploads", file.name);

  try {
    await writeFile(uploadPath, buffer);

    return NextResponse.json({
      response: "Successfully uploaded",
      success: true,
      path: `/uploads/${file.name}`, // frontend can use this URL
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
};
