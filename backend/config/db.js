import mongoose from "mongoose";
import express from "express"
async function  ConnectDB(){
try{
    const DB = await mongoose.connect(process.env.DATABASE_URL)
    console.log(" ✅ DB Connected Successfully")
} catch(error){
    console.log("Error occured while connecting to DB",error.message)
}
    
};

export default ConnectDB;