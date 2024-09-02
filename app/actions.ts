"use server";

import { cookies } from "next/headers";
import { UserLogin } from "./Types";

const featchUserCookie = async (userData: UserLogin) => {
    console.log(userData,'*****************');
    
  try {
    cookies().set("userLogin", JSON.stringify(userData),{ secure: true,});
  } catch (error) {
    console.log("set cookies error",error);
    
  }
};

const deleteUserCookie = async (cookiesName: string) => {
    try {
        
        cookies().delete(cookiesName);
      } catch (error) {
        console.error("Error deleting cookie:", error);
      }
};
export { featchUserCookie,deleteUserCookie };
