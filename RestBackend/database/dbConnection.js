import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "RESTAURANT"
    }).then(()=>{
        console.log("Connected to DB Successfully");
    }).catch(err=>{
        console.log(`Error while connecting to DB! ${err}`);
    });
}