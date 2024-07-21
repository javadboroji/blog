import connectMongoDB from "@/app/Libs/Mongodb";
import { NextRequest, NextResponse } from "next/server";
import Categores from "@/app/Moudles/CategoryModuls";

export  async function GET(){
    try{
        await connectMongoDB();
        const data=await Categores.find();
        return NextResponse.json({
            code:200,
            message:'',
            data:data
        })
    }
    catch(error){
        return NextResponse.json({code:500, message:error})
    }
}