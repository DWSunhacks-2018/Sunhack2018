var express = require('express');
const app = express();
const bodyParser = require('body-parser');
var path = require('path');
var router = require('./routes');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use('/api', router);

app.listen(3001, function(){
    console.log('listening on 3001');
})
