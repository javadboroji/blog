import connectMongoDB from "@/app/Libs/Mongodb";
import { NextRequest, NextResponse } from "next/server";
import Persons from "@/app/Moudles/EccomerceUsers";

export async function POST(req: NextRequest) {
    const person = await req.json();
    await connectMongoDB();    
    try {
        let newUser
        if (person) {
            
            
            newUser=await Persons.create({
                userName:person.userName,
                password:person.password,
                email:person.email
            })
            console.log(newUser,'***');
        }
        return NextResponse.json({ code: 200, message: "user login successfully" ,user:newUser });
    }
    catch (error) {
        return NextResponse.json({ code: 500, message: error })
    }
}