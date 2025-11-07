import mongoose from "mongoose";


const connectMongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("✅ MongoDB connection established successfully");
    } catch (error) {
        console.error("Error connection MongoDB: ", error );
        
    }
};

export default connectMongoDB;