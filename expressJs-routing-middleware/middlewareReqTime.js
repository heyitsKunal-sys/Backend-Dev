const express = require('express')
const app = express()

const requestTime = function(req,res,next){
    req.requestTime = Date.now();
    next();
}
app.use(requestTime);

app.get('/',(req,res)=>{
    let responseText = 'hello world!<br/>';
    responseText += `<small>Requested at:${req.requestTime}</small>`;
    res.send(responseText)
});

app.listen(3000);

// hello world!
// Requested at:1784370115823