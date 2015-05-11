(function() {

  var express = require('express');
  var app = express();
  var server = require('http').createServer(app);
  var root = __dirname + '/public/';

  app.use(express.static(root));

  var port = process.env.PORT || 3000;

  server.listen(port, function(){
    console.log("Listening on server port " + port);
  });



}());