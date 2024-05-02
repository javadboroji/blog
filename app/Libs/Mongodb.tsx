import mongoose from "mongoose";



const connectMongoDB=async()=>{
    try { 
       await mongoose.connect(`mongodb://localhost:27017/NextBlog`);
        console.log("/*------------------ Conection -----------------*/");
    } catch (error) {
        console.log("/*------------------ Not Conection -----------------*/",error);
    }
}

export default connectMongoDB;