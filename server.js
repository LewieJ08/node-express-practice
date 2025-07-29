const express = require("express");
const app = express();

app.get("/", (req, res) => {
    console.log("Running index route on port: 3000");
    res.send("Hello world");
})  

app.listen(3000);





























