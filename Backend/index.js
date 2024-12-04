import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

const port = 5000;

const mongoUrl = "mongodb://127.0.0.1/MummasDB"

mongoose.connect(mongoUrl)
.then(() => app.listen(port))
.then(() => console.log(`Mumma's Db is connected at port ${port}`))
.catch((err) => console.log(err));

//Server got connected over here

