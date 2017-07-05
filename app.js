// basic require imports for node
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

// create an instance of express for my app and instantiate body parser and cors
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

// GET Call return a json that formats dates
app.get('/date/:dateParam', function(req, res, next){
  console.log('URL Works');
  // read the param
  var dateValue = req.params.dateParam;
  // options for formatting date in natural date view
  var dateFormatOpt = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  if (isNaN(dateValue)){
    var naturalDate = new Date(dateValue)
    naturalDate = naturalDate.toLocaleDateString("en-US", dateFormatOpt);

    var unixDate = new Date(dateValue).getTime()/1000;
  }

  // return dateValue;
  res.json({unix: unixDate, natural: naturalDate});
})

app.listen(4500, function(){
  console.log('aaaa');
})