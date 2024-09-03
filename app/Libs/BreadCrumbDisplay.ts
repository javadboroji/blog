import { NextApiRequest, NextApiResponse } from "next";
import { headers } from "next/headers";
import { NextRequest } from "next/server";

const hasBreadCrumb=(req: NextRequest)=>{
    const test= req.nextUrl.pathname;
    console.log(test);
    
}
export{hasBreadCrumb}