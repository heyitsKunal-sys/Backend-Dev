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

app.listen(3000, function () {
    console.log("its running")
})
