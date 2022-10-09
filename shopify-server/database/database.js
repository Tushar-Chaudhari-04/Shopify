import mongoose from "mongoose";

export const Connection=async (mongoDBPath)=>{               //Async and await are always in pair 
    const URL=mongoDBPath;
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log("DataBase Connected Successfully")
    }catch(err){
        console.log(`Error while connecting with Database `,err.message)
    }
}

export default Connection;