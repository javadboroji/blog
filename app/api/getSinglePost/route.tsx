import connectMongoDB from "@/app/Libs/Mongodb";
import { NextRequest, NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from 'next';
import Posts from "@/app/Moudles/Posts";

export async function POST(req:NextRequest){
    const {id} = await req.json();
    try {  
         await connectMongoDB();
         const foundPost = await Posts.findById(id);
        return NextResponse.json({
            code:200,
            message:'',
            post:foundPost
        })
        
    } catch (error) {
        return NextResponse.json({code:500, message:error})
    }
}