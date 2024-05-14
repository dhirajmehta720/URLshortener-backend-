import mongoose from "mongoose";
const connectDB = async() => {
    try {
        await mongoose.connect(`mongodb+srv://dhirajmehta720:${process.env.DB_PASSWORD}@cluster0.myibkxw.mongodb.net/shorturl`);
        console.log("database connected");
    } catch (error) {
        console.log("mongodb not connected");
    }
}
export {connectDB};