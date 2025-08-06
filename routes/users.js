const express = require("express");
const router = express.Router();

// router acts as a sub-app that can be exported to server.js

router.use(logger);

router.get("/", (req, res) => {
    res.send("User List")
});

router.get("/new", (req, res) => {
    res.render("users/new");
});

router.post("/", (req, res) => {
    const isValid = true;
    if (isValid) {
        users.push({ firstName: req.body.firstName });
        res.redirect(`users/${users.length - 1}`)
    } else {
        console.log("Error");
        res.render("users/new", { firstName: req.body.firstName});
    }
});

router.route("/:id")
    .get((req, res) => {
        res.send(`Get User With ID ${req.params.id}`);
    })
    .put((req, res) => {
        res.send(`Update User With ID ${req.params.id}`);
    })
    .delete((req, res) => {
        res.send(`Delete User With ID ${req.params.id}`);
    });

const users = [{name: "kyle"}, {name: "sally"}];
router.param("id",(req, res, next, id) => {
    req.user = users[id];
    next();
});

function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
};


module.exports = router;