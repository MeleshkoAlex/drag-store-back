var express = require('express');
var app = express();
const CommonRoutes = require('./src/routes/public/common.routes.js');
const PtivateRoutes = require('./src/routes/private/private.routes.js');

app.use(CommonRoutes);
app.use(PtivateRoutes);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});