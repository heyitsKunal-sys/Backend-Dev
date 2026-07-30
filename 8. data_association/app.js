const express = require('express');
const app = express();

const userModel = require("./models/user");
const postModel = require("./models/posts");


app.get('/', function (req, res) {
    res.send('ola')
})

app.get('/create', async function (req, res) {
    let user = await userModel.create({
        username: "kunal",
        age: 22,
        email: "kunu@gmail.com"
    });
    res.send(user)
    console.log(user)
})

app.listen(3000);