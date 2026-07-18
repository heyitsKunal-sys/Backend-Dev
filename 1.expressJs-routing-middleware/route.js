const express = require('express')
const app=express();

app.get('/',(req,res)=>{    //jab bhi '/' ispe ayega to ye fun chalega
    res.send("iam the best developer");

})

app.get('/profile',(req,res)=>{
    res.send("best best hey hey best hey best hey iam best one hello")


})

app.listen(3000);