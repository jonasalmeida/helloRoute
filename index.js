var express = require('express');
var app = express();
app.get('/',require('./routes.js') )
//app.get('/',function(req,res){res.end('hello route 1')})
var port = process.env.PORT || 3000
app.listen(port, function () {
  console.log('Example app listening on port '+port+'!')
})