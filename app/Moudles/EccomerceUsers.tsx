import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PersonsSchema  = new mongoose.Schema(
    {
       userName:String,
       password:String,
       email:String
    },
    {
      timestamps: true,
    collection: 'userList' 
    }
  );
  const Persons= mongoose.models.Person || mongoose.model("Person", PersonsSchema);
export default Persons
