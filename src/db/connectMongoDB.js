import mongoose from "mongoose";
import { Note } from "../models/note.js";


const connectMongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("✅ MongoDB connection established successfully");

        await Note.syncIndexes();
        
    } catch (error) {
        console.error("Error connection MongoDB: ", error );
        process.exit(1);
    }
};





export default connectMongoDB;