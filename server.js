var express = require('express');
var app = express();
var path    = require("path");
var getUniquePermutations = require('get-unique-permutations')
const jsonfile = require('jsonfile');
const file = "./static/students.json";
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/letsGo', function(req,res){
  data = getUniquePermutations([0,1,2])
  jsonfile.writeFile(file, data, function (err) {
      res.send(err)
    })
  res.send(data)
})

app.listen('8000');
exports = module.exports = app;
