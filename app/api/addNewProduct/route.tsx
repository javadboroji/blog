import connectMongoDB from "@/app/Libs/Mongodb";
import { NextRequest, NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from 'next';
import Products from "@/app/Moudles/EcceomerceProducts";
import { write, writeFile, writeFileSync } from "fs";
export async function POST(req: NextRequest) {
    const data = await req.formData();
    await connectMongoDB();
    try {
        let newProduct = null
        if (data) {
            const imageFile = await data.get('src');
            if (!imageFile || !(imageFile instanceof File)) {
                return NextResponse.json({ code: 400, message: 'Missing image file' });
            }
             const arrayBuffer = await imageFile.arrayBuffer();
             const buffer = Buffer.from(arrayBuffer);
             const path=`./file/${imageFile.name}`;
             await writeFileSync(path,buffer)
             const imageUrl = imageFile.name || 'image.jpg';
            newProduct = await Products.create({
                title: data.get('title'),
                price: data.get('price'),
                description: data.get('description'),
                category: data.get('category'),
                image: imageUrl,
            })
        }
        return NextResponse.json({ code: 200, message: "Product added successfully" });
    }
    catch (error) {
        return NextResponse.json({ code: 500, message: error })
    }
}