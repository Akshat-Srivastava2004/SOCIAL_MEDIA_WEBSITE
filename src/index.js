import dotenv from "dotenv";
import express from "express";
import { User } from "./model/user.model.js";
import { registerUser } from "./controller/user.controller.js";
import connectDB from "./db/index.js";
import { app } from "./app.js";
import { Admin } from "./model/admin.model.js";
import cookieParser from "cookie-parser";
dotenv.config({
    path: './public/.env'
});

// const admindata = {
//     adminname: "akshat",
//     Password: "mernstack"
// };

// Admin.create(admindata)
//     .then(savedAdmin => {
//         console.log('Admin data saved:', savedAdmin);
//     })
//     .catch(err => {
//         console.error('Error saving admin data:', err);
//     });


connectDB()
    .then(() => {
        app.listen(process.env.PORT || 6000, () => {
            console.log(`Server is running at port: ${process.env.PORT || 6000}`);
           
        });
    })
    .catch((err) => {
        console.log("MongoDB connection failed !!!", err);
    });
