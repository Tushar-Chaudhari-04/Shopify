import express from "express";
import dotenv from "dotenv";
import Connection from "./database/database.js";
import DefaultData from "./defaultData.js";
import router from "./routers/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const app=express();                              //Using express to start our backend server
dotenv.config();                                 //Setting up env to hide confidential data

app.use(cors());
app.use(bodyParser.json({extended:true}))        //BodyParse parse the json data coming from client
app.use(bodyParser.urlencoded({extended:true}))  //BodyParse also handlr url coming from client filling empty spaces
app.use("/",router);                              //Using Router to hit endpoint and carry out instructions

const MongoDB_URL=process.env.MongoDB_URL;       //Getting confedential data 

Connection(MongoDB_URL);                         //Making connections with mongoDB

const PORT=process.env.PORT;                     //Using PORT to run on localhost
app.listen(PORT,()=>{
    console.log("Server is Started on PORT")
});

DefaultData();                                   //Adding product data to MongoDB
