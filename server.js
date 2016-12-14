var webpack = require('webpack');
var config = require('./webpack.config');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var compiler = webpack(config);
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use('/', express.static(path.join(__dirname + '/build')));
app.use('/src', express.static(path.join(__dirname + '/src')));
app.use('/home', express.static(path.join(__dirname + '/pages')));

app.post('/loginDetails',function(req,res){
  console.log(req.body);
  if((req.body.loginUser === 'charit') && (req.body.loginPwd === '123')){
    res.send('./home/');
  }
  else{
    res.send('/');
  }
  // res.redirect('/');
});

app.post('/searchDetails',function(req,res){
  res.json({
    sample:req.body.searchID
  });
});

app.get('/getAllData',function(req,res){
  res.json({
    sample:req.body.searchID
  })
})

var port = 3000;
app.listen(port, function () {
  console.log('app listening on port ' + port);
});