import connectMongoDB from "@/app/Libs/Mongodb";
import { NextRequest, NextResponse } from "next/server";
import Products from "@/app/Moudles/EcceomerceProducts";
import { ObjectId } from "bson";

export  async function GET(request:NextRequest ,response:NextResponse){
    try{
        //give query key and value use 
        const url = new URL(request.url);
        const searchParams = new URLSearchParams(url.search);
        const id=searchParams.get("id") ;
        
         if (!id) {
            return NextResponse.json({ code: 400, message: 'Missing product ID' });
          }
        await connectMongoDB();
        console.log(id,'*id*');
        
        const objectId = new ObjectId(id);
        const productsData=await Products.findById(id);
        console.log(objectId,'***objectId***');
        
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