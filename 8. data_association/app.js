const express = require('express');
const app = express();


app.get('/',function(req,res){
    res.send('ola')
})

app.listen(3000);