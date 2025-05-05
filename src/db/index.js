import mongoose from "mongoose";
import { DB_NAME } from "../constants";
const connectDB = async ()=>{
    try{
        const connectionInciated = await mongoose.connect(`${process.dotenv.MONGOOSE_URI}/${DB_NAME}`)
        console.log(`Connected with mongoose: ${connectionInciated.connection.host}`)
    } catch (error){
        console.error("Connection Failed: ",error);
        process.exit(1);
    }
}
export default connectDB;
