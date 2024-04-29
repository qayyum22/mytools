const express = require("express");
const app = express()
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT;

// app.use(express.json);
// app.use(
//     cors({
//         origin: ["*"],
//         credentials: true,
//     }));


app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Backend Connected Successfully"
    })
})

app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})