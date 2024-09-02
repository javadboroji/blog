"use server"

import { cookies } from "next/headers"

 const  getCookiesValues=async(cookiesName:string)=>{
    const resutl=cookies().get(cookiesName);    
    return  resutl
}
export{getCookiesValues}