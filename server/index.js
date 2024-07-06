const express = require("express");
const app = express()
const database = require("./config/database");
const cors = require('cors');
const { signup } = require("./controller/Auth");


require('dotenv').config();


const PORT = process.env.PORT;


database.connect();

app.use(express.json);
app.use(
    cors({
        origin: ["*"],
        credentials: true,
    }));


app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Backend Connected Successfully",
    })
})

app.post("/signup", signup);

app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})