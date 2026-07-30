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
app.get('/post/create', async function (req, res) {
    let post = await postModel.create({
        postdata: "hello sare log kaise ho",
        user: "6a6b251b2724f2b4368e08ad"

    })

    let user = await userModel.findOne({ _id: '6a6b251b2724f2b4368e08ad' })
    user.posts.push(post._id);
    await user.save();
    res.send({post , user});



})

app.listen(3000);