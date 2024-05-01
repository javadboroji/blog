import mongoose from "mongoose";



const connectMongoDB=async()=>{
    try { 
       await mongoose.connect(`${process.env.NEXT_PUBLIC_SIT_MONGODB_URL}`);
        console.log("/*------------------ Conection -----------------*/");
    } catch (error) {
        console.log("/*------------------ Not Conection -----------------*/",error);
    }
}

export default connectMongoDB;