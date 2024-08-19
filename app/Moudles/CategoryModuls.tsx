import mongoose from "mongoose";
const { Schema, model } = mongoose;

const CategorySchema  = new mongoose.Schema(
    {
       EnTitle:String,
       PeTitle:String,
    },
    {
      timestamps: true,
    collection: 'category' 
    }
  );
  const Categores= mongoose.models.Category || mongoose.model("Category", CategorySchema);
export default Categores
