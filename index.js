var express = require('express');
var app = express();
var path = require('path');

app.get('/page1', function (req, res) {
  res.sendFile(path.join(__dirname + '/page1/site.html'));
});


app.get('/main.css', function (req, res) {
  res.sendFile(path.join(__dirname + '/page1/main.css'));
});

app.get('/site.js', function (req, res) {
  res.sendFile(path.join(__dirname + '/page1/site.js'));
});




app.get('/page2', function (req, res) {
  res.sendFile(path.join(__dirname + '/page2/site.html'));
});





app.get('/page3', function (req, res) {
  res.sendFile(path.join(__dirname + '/page3/index.html'));
});

app.get('/video/video.mp4', function (req, res) {
  res.sendFile(path.join(__dirname + '/video/video.mp4'));
});







app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});