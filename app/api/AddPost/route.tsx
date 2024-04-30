import connectMongoDB from "@/app/Libs/Mongodb";
import { NextRequest, NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from 'next';
import Posts from "@/app/Moudles/Posts";

export async function POST(req:NextRequest){
    const data = await req.json();
    await connectMongoDB();
    try{
        let newPost=null
        if(data){
            console.log(data.form);
            
            newPost= await   Posts.create({
                src:'',
                date:data.date,
                author:data.author,
                title:data.title
            })
        }
        return NextResponse.json({code:200, message:"post sucess added" ,info:newPost});
    }
    catch(error){
        return NextResponse.json({code:500, message:error})
    }
}