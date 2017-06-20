console.log("here we go");
const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const data = require('../data.js');
app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')


app.get('/', function (req, res) {
  res.render('index', data)
});
// app.get('/', function (req, res) {
//   res.render(Robot)
// });

app.listen(4000, function () {
});
