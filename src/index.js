import {connectDB} from "./db";

// method 1 for using dotenv in code (jsut one line)
require("dotenv").config({path: "./env"})

// method 2 for using dotenv (add changes to json modules ( "dev": "nodemon (-r dotenv/config --experimental-json-modules) src/index.js") ()part adding more)
// import {dotenv} from "dotenv";
// dotenv.config({
//     path: './env'
// })




connectDB();



/* Approach 1 in which we just put code into one index.js file
const express = require("express");
const app = express();

;(async () => {
    try {
        await mongoose.connect(`${process.dotenv.MONGOODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("Error: ", error)
            throw error;
        })
        app.listen(process.dotenv.PORT, () => {
            console.log(`Port listening at ${process.dotenv.PORT}`)
        })
    } catch(error){
        console.error("Error: ",error);
        throw error;
    }
    
})()
*/