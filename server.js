var webpack = require('webpack');
var config = require('./webpack.config');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var compiler = webpack(config);
app.use(bodyParser.json());

app.use(function (req, res, next) {
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

app.post('/loginDetails', function (req, res) {
  console.log(req.body);
  if ((req.body.loginUser === 'charit') && (req.body.loginPwd === '123')) {
    res.send('./home/');
  }
  else {
    res.send('/');
  }
  // res.redirect('/');
});

app.post('/searchDetails', function (req, res) {
  res.json({
    sample: req.body.searchID
  });
});

app.get('/getAllData', function (req, res) {
  res.json({
    sample: req.body.searchID
  })
});


var getDeviceInfo = {
  'deviceID': 'DEV00001',
  'regName': 'Registered Name',
  'vehEngName': 'Vehicle Name',
  'devSimNo': '1111111111',
  'devIMEINo': '123456789012345',
  'devTotalHMR': '12345',
  'address': 'Hyderabad',
  'city': 'Hyderabad',
  'zipCode': '500008',
  'state': 'Telangana',
  'devStatus': 'Working',
  'regNum': '9999999999'
}
// get the device information
app.post('/getDeviceInfo', function (req, res) {
  if (getDeviceInfo.deviceID === req.body.searchID) {
    res.json(getDeviceInfo);
  }
});

var recReqData = [
  {
    'reqRaised': '15-12-2016',
    'reqRcv':'15-12-2016',
    'loc':'17.422217, 78.382042',
    'hmr':'12345',
    'reqTkn':'00000002',
    'reqStat':'Initiated'
  },
  {
    'reqRaised': '14-12-2016',
    'reqRcv':'14-12-2016',
    'loc':'18.422217, 77.382042',
    'hmr':'1234',
    'reqTkn':'00000001',
    'reqStat':'Completed'
  }
];
// recent 2 requests information
app.post('/getRecentRequests', function (req, res) {
  if (getDeviceInfo.deviceID === req.body.searchID) {
    res.json(recReqData);
  }
})

var port = 3000;
app.listen(port, function () {
  console.log('app listening on port ' + port);
});