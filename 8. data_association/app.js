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

// {
//   "post": {
//     "postdata": "hello sare log kaise ho",
//     "user": "6a6b251b2724f2b4368e08ad",
//     "_id": "6a6b2d2465a191539a0c1d0e",
//     "date": "2026-07-30T10:53:24.793Z",
//     "__v": 0
//   },
//   "user": {
//     "_id": "6a6b251b2724f2b4368e08ad",
//     "username": "kunal",
//     "email": "kunu@gmail.com",
//     "age": 22,
//     "posts": [
//       "6a6b2d2465a191539a0c1d0e"
//     ],
//     "__v": 1
//   }
// }   ye hoga localhost:3000/post/create pe 







app.listen(3000);