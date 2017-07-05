// basic require imports for node
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

// create an instance of express for my app and instantiate body parser and cors
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(4500, function(){
  console.log('aaaa');
})