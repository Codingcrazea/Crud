import express from "express";
var app = express();
import userRoute from "./routing/userRoute.js";
import connectDB from  "./Database/connection.js"
import bodyParser from "body-parser";

app.use("/api",userRoute);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json()); // For parsing JSON
app.use(bodyParser.urlencoded({ extended: true })); // For parsing URL-encoded data

app.get("/",((req,res)=>{
    res.send("<h1>Home </h1>")
}))

connectDB();
app.listen(4000,()=>{
    console.log("Server Started");
});
