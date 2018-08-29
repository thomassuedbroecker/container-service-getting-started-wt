var express = require('express')
var os = require("os");
var hostname = os.hostname();
var app = express()
var startTime = Date.now()

var delay = 10000 + Math.floor(Math.random() * 5000)

app.get('/', function(req, res) {
  res.send('Hello world from ' + hostname + '! Great job getting the second stage up and running!\n')
})
app.get('/healthz', function(req, res) {
  var message = "Timeout, Health check error! - DELAY is greater than " + delay.toString;

  if ((Date.now() - startTime) > delay) {
    res.status(500).send({
      error: message
    })
  } else {
    message = "OK! - DELAY is less than " + delay.toString;
    res.send('message')
  }
})
app.listen(8080, function() {
  console.log('Sample app is listening on port 8080.')
})
