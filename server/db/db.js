dotenv.config();
import mongoose from "mongoose";
import dotenv from "dotenv";

const uri = process.env.DB;
const db = async() => {
    try {
        await mongoose.connect(uri, { useNewUrlParser:true});
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log(`Error in db.js ${error}`);
    }
}

export default db;