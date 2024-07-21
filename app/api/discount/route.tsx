import connectMongoDB from "@/app/Libs/Mongodb";
import { NextRequest, NextResponse } from "next/server";
export  async function POST(req: NextRequest){
    const dicountValue=await req.json()
    try{
        await connectMongoDB();
        if(dicountValue==="jcxs"){
                return NextResponse.json({
                    code:200,
                    message:'dicountRight',
                    discount:true
                })
            }
            else{
                return NextResponse.json({
                    code:500,
                    message:'discount fault',
                    discount:false
               })
            }
               
        
    }
    catch(error){
        return NextResponse.json({code:500, message:error})
    }
}