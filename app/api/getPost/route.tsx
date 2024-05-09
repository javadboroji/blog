import connectMongoDB from "@/app/Libs/Mongodb";
import { NextRequest, NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from 'next';
import Posts from "@/app/Moudles/Posts";

export  async function GET(){
    
    
    try{
        await connectMongoDB();
        const postsData=await Posts.find();
        return NextResponse.json({
            code:200,
            message:'',
            posts:postsData
        })
    }
    catch(error){
        return NextResponse.json({code:500, message:error})
    }
}