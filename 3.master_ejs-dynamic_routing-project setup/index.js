const express = require('express')
const app = express()
const path = require('path')
//body-parsers
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// public static files
app.use(express.static(path.join(__dirname, 'public'))); //chahe koi bhi reqst aye backend pe har reqst k liye static files is path pe dhundna ie. public

// ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.send("chal raha ha") isko ej k liye comment out kra
    res.render("index"); //render vahi hoga jo views file me h . so views file me index.ejs h so hum index hi likhte hai ,pura extension nahi 
});
//dynamic route
app.get('/profile/:username', (req, res) => {

    // res.send("hello bhai kya scn")
    res.send(req.params.username)
    // jaise hum localhost:3000/profile/kunal pe h to.. frontend se kunal aya backend me
    //  or save hua  username me. or backend se humne phir response bhja through the above line
    // phir se kunal or frontend pe aya kunal....   route me /ritka h to ritika show hoga
    // /sam h to sam show hoga......jo bhi username ki value h..

    // yahan me :kunal liku :ritika likhu ye sbke liye chalega ...dynamic ban gyaab ye route

});

app.listen(3000, function () {
    console.log("its running")
})
