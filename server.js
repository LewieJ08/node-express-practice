const express = require("express");

const app = express();
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index", {text: "world"})
});  

app.get("/users", (req, res) => {
    res.send("hello world")
});

app.listen(3000, () => {
    console.log("Server running on port: 3000");
});





























