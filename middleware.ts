"use server";
import { NextApiResponse } from "next";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest,res: NextApiResponse) {
  if (request.nextUrl.pathname === "/logout") {
    const response = NextResponse.redirect(new URL("/", request.url));
    response.cookies.delete("userLogin");
    return response;
  }
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    const result= cookies().get("userLogin");
    if(!result ||request===undefined){
      return  NextResponse.redirect(new URL("/", request.url));
    }
  }
}
