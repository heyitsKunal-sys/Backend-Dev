const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/testingthedatabase");

const userSchema = mongoose.Schema({
    username: String,  //{ type: String }  aise bhi likh sakte hai
    email: String,
    age: Number,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId   ,      //ek way h likhne ka: mtlv iska type h ->id
            ref: 'post'
        }
        
    ]
})

module.exports = mongoose.model("user", userSchema);