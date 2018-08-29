var express = require('express')
var path = require('path')
var opn = require('opn')

const PORT =8080;

var app = express();

app.use(express.static('./dist'));


app.get('/', function (req, res) {

    res.sendFile(path.join(__dirname + '/index.html'));


});

app.listen(PORT);
let uri = 'http://localhost:' + PORT;

console.log('> Listening at ' + uri + '\n')
opn(uri);
