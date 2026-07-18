const express = require('express');
const app = express();

app.use(function (req, res, next) {
  console.log('LOGGED');
  next();
});
app.use(function (req, res, next) {
  console.log('ek barr or');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/about', (req, res) => {
  res.send('Hello kya scn ha!');
});

app.listen(3000);