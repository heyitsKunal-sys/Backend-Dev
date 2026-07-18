// cookies , middleware , express.json() and express.urlencoded()


const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.post("/login", (req, res) => {

    console.log(req.body);

    res.cookie("token", "abc123");

    res.send("Logged In");

});

app.get("/profile", (req, res) => {

    console.log(req.cookies);

    res.send("Profile");

});

app.listen(3000);