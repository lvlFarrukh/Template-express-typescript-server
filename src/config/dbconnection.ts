import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("strictQuery", false);
export default mongoose.connect(process.env.DB_CONNECTION, {dbName: 'overseaspakistan'})
    .then(() => {
        console.log("database is successfully connected!")
    })
    .catch((e: any) => {
        console.log(e.message)
    })

