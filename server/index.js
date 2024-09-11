import express, { json } from "express";
const app = express();
import {chat} from "./controller/groq.js";
import cors from 'cors';
// import { signup } from "./controller/Auth";
// import { chat } from "./controller/LLM_APIs";


import dotenv from 'dotenv';
dotenv.config();


const PORT = process.env.PORT;


// dbconnect();

app.use(json());
app.use(cors());


app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Backend Connected Successfully",
    })
})

// app.post("/signup", signup);

app.post("/chat",  chat);

app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})