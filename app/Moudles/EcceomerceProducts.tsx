import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ProductsSchema  = new mongoose.Schema(
    {
        category:String,
        description:String,
        id:Number,
        image: String,
        price:Number,
        rating: {
            rate: Number,
            count: Number,
          },
        
        title:String,
    },
    {
      timestamps: true,
    collection: 'eccomerceData' 
    }
  );
  const Products= mongoose.models.Product || mongoose.model("Product", ProductsSchema);
export default Products
