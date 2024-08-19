import connectMongoDB from "@/app/Libs/Mongodb";
import { NextRequest, NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";
import Posts from "@/app/Moudles/Posts";
import { write, writeFile, writeFileSync } from "fs";
import { File } from "buffer";
export async function POST(req: NextRequest) {
  const data = await req.formData();
  await connectMongoDB();
  try {
    let newPost = null;
    if (data) {
      console.log(data,"***********");
      
      const imageFile = await data.get("src");
      
      if (!imageFile || !(imageFile instanceof File)) {
        return NextResponse.json(
          { message: "Missing image file" },
          { status: 500 }
        );
      }
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const path = `./public/file/${imageFile.name}`;
      
      await writeFileSync(path, buffer);
      const imageUrl = imageFile.name || "image.jpg";
      newPost = await Posts.create({
        src: imageUrl,
        date: data.get("date"),
        author: data.get("author"),
        title: data.get("title"),
        description: data.get("description"),
      });
    }
    return NextResponse.json({
      code: 200,
      message: "post sucess added",
      info: newPost,
    });
  } catch (error) {
    console.log(error);
    
    return NextResponse.json({ message: "error catch" }, { status: 500 });
  }
}
