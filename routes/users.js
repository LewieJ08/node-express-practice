const express = require("express");
const router = express.Router();

// router acts as a sub-app that can be exported to server.js

router.get("/", (req, res) => {
    res.send("User List")
});

router.get("/new", (req, res) => {
    res.send("User New Form")
});

module.exports = router;