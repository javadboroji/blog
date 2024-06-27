import connectMongoDB from "@/app/Libs/Mongodb";
import { NextRequest, NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from 'next';
import Products from "@/app/Moudles/EcceomerceProducts";
export async function DELETE(request:NextRequest ) {
    await connectMongoDB();
    try {
          //give query key and value use 
          const url = new URL(request.url);
          const searchParams = new URLSearchParams(url.search);
          const id=searchParams.get("id") ;
        if (id) {
          await Products.findByIdAndDelete(id);
        }
        return NextResponse.json({ code: 200, message: "Product removed successfully" });
    }
    catch (error) {
        return NextResponse.json({ code: 500, message: error })
    }
}