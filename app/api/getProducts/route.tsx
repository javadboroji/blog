import connectMongoDB from "@/app/Libs/Mongodb";
import { NextRequest, NextResponse } from "next/server";
import Products from "@/app/Moudles/EcceomerceProducts";

export  async function GET(){

    try{
        await connectMongoDB();
        const productsData=await Products.find();
        console.log(productsData,'*productsData*');
        
        return NextResponse.json({
            code:200,
            message:'',
            data:productsData
        })
    }
    catch(error){
        return NextResponse.json({code:500, message:error})
    }
}