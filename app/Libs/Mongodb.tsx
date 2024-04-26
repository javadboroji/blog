import mongoose from "mongoose";



const connectMongoDB=async()=>{
    try { 
       await mongoose.connect(`${process.env.MONGODB_URL}`);
        console.log("/*------------------ Conection -----------------*/");
    } catch (error) {
        console.log("/*------------------ Not Conection -----------------*/",error);
    }
}

export default connectMongoDB;