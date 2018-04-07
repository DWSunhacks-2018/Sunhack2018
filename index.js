var express = require('express');
const app = express();
const bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());


app.listen(3001, function(){
    console.log('listening on 3001');
})
