import connectMongoDB from "@/app/Libs/Mongodb";
import { NextRequest, NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";
import Posts from "@/app/Moudles/Posts";
import { write, writeFile, writeFileSync } from "fs";
import { File } from "buffer";
export async function PUT(req: NextRequest) {
  const data = await req.formData();
  await connectMongoDB();
  try {
    let findPost = null;
    let updatePost = null;
    if (data) {
      //   if (!imageFile || !(imageFile instanceof File)) {
      //     return NextResponse.json(
      //       { message: "Missing image file" },
      //       { status: 500 }
      //     );
      //   }
      //   const arrayBuffer = await imageFile.arrayBuffer();
      //   const buffer = Buffer.from(arrayBuffer);
      //   const path = `./public/file/${imageFile.name}`;

      //   await writeFileSync(path, buffer);
      //   const imageUrl = imageFile.name || "image.jpg";

      //   newPost = await Posts.create({
      //     src: imageUrl,
      //     date: data.get("date"),
      //     author: data.get("author"),
      //     title: data.get("title"),
      //     description: data.get("description"),
      //   });
      let postId = data.get("_id");
      if (!postId) {
        return NextResponse.json(
          { message: "Post Not Found" },
          { status: 404 }
        );
      }
      findPost = await Posts.findById(postId);
      const imageFile = await data.get("src");
      let imageUrl = null;
      if (imageFile != null && imageFile instanceof File) {
        const arrayBuffer = await imageFile.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const path = `./public/file/${imageFile.name}`;
        await writeFileSync(path, buffer);
        imageUrl = imageFile.name || "image.jpg";
      }
      updatePost = {
        src: imageFile === null ? findPost.src : imageUrl,
        date: data.get("date"),
        author: data.get("author"),
        title: data.get("title"),
        description: data.get("description"),
      };
      await Posts.updateOne(updatePost);
    }
    return NextResponse.json({
      code: 200,
      message: "post sucess added",
      info: updatePost,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: "error catch" }, { status: 500 });
  }
}
