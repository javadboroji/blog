import connectMongoDB from "@/app/Libs/Mongodb";
import { NextRequest, NextResponse } from "next/server";
import Persons from "@/app/Moudles/BlogUserList";

export async function POST(req: NextRequest) {
  const personSubmit = await req.json();
  try {
    await connectMongoDB();
    const personList = await Persons.find();
    if (personList) {
      const userExact = await personList.find(
        (item) =>
          item.userName === personSubmit.userName &&
          item.password === personSubmit.password
      );
      if (userExact) {
        return NextResponse.json({
          code: 200,
          message: "Login success",
          login: true,
          userName:personSubmit.userName 
        });
      } else {
        return NextResponse.json(
          {
            code: 500,
            message: "userName or password not correct",
            login: false,
          },
          { status: 500 }
        );
      }
    }
  } catch (error) {
    return NextResponse.json({ code: 500, message: error });
  }
}
