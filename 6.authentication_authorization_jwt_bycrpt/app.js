const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')


app.use(cookieParser())


app.get('/', (req, res) => {
    res.cookie('name', 'kunal')    //set krne ke liye res use hota ha(yahan humne cookie set kri)
    res.send('done')

})

app.get('/read', (req, res) => {
    console.log(req.cookies)    // read krne k liye req use hota hai(yahan humne cokkie read kri)
    res.send('read page')

})

app.listen(3000)