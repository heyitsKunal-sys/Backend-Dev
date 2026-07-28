const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


app.use(cookieParser())


// app.get('/', (req, res) => {
//     res.cookie('name', 'kunal')    //set krne ke liye res use hota ha(yahan humne cookie set kri)
//     res.send('done')

// })

// app.get('/read', (req, res) => {
//     console.log(req.cookies)    // read krne k liye req use hota hai(yahan humne cokkie read kri)
//     res.send('read page')

// })


// app.get('/',function(req,res){
//     bcrypt.genSalt(10 , function(err,salt){                  //salt ek random string hoti ha
//         bcrypt.hash('lovelylovely',salt, function(err, hash){
//             console.log(hash)
//             //$2b$10$zqFJAVsKwn/aEdafUiOb0OQ4qIT2oUuv91wzjB40Odx.e.2IUgMJi  ye aya encrypt password
//         })
//     })
// })
// to check we use: bcrypt.compare("isme apna password","yahan encrypted string", function(err, result){
//   console.log(result)     
//                  })
// abs scn ye hai ki ek barr login krne pe jab passowrd encrypt ho gya
// phir humne phir login kra to password ko phirse encrypt krke database me to encrypt string h usko comapre h hai
// mtlv encrpyt pass ko saved encypt password(string)se compare krte hai
// encrypt krne ko hash bolte hai . so password ko hash banao or saved hash se compare karo



app.get('/', function (req, res) {
    let token = jwt.sign({ email: "kunal@example.com" }, "secret")
    res.cookie('token', token)
    // console.log(token)
    res.send('done')
})

app.get('/read', function (req, res) {

    let data = jwt.verify(req.cookies.token, 'secret')
    console.log(data)
//   output:{ email: 'kunal@example.com', iat: 1785227539 }
    // console.log(req.cookies)
})


app.listen(3000)