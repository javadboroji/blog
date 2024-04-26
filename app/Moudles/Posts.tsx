import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PostSchema  = new mongoose.Schema(
    {
        src:String,
        author:String,
        date:String,
        title:String
    },
    {
      timestamps: true,
    collection: 'NextBlogData' 
    }
  );
  const Posts= mongoose.models.Post || mongoose.model("Post", PostSchema);
export default Posts