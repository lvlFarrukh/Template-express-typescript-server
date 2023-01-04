import mongoose from "mongoose";

const connectDB = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect("mongodb+srv://farrukha303:4515750@cluster0.wcc2p.mongodb.net/eshop-db?retryWrites=true&w=majority")
    .then(() => {
        console.log("database is successfully connected!")
    })
    .catch((e: any) => {
        console.log(e.message)
    })
}

export default connectDB;