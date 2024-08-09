import connectMongoDB from "@/app/Libs/Mongodb";
import { NextRequest, NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";
import Posts from "@/app/Moudles/Posts";

export async function POST(req: NextRequest) {
  const data = await req.formData();
  await connectMongoDB();
  try {
    let newPost = null;
    if (data) {
      const imageFile = await data.get("src");
      if (!imageFile || !(imageFile instanceof File)) {
        return NextResponse.json({ code: 400, message: "Missing image file" });
      }
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const path = `./file/${imageFile.name}`;
      await writeFileSync(path, buffer);
      const imageUrl = imageFile.name || "image.jpg";
      newPost = await Posts.create({
        src: imageUrl,
        date: data.get("date"),
        author: data.get("author"),
        title: data.get("title"),
      });
    }
    return NextResponse.json({
      code: 200,
      message: "post sucess added",
      info: newPost,
    });
  } catch (error) {
    return NextResponse.json({ code: 500, message: error });
  }
}
