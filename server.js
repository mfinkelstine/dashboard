'use strict';
// loading modoules 
var express = require('express');
var http = require('http');
var bodyparser = require('body-parser');
var path = require('path');
var routes = require('./routes/index.js');
var port = process.env.PORT || 3000;



var app = express();

// Configration 
// view engine app
//app.set('/views', path.join(__dirname, '/views'));
//app.set('views',__dirname+ '/views');
//app.set('public',__dirname+ '/public');
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static __dirname + '/public');
//app.use(express.static('views'));
app.set('view engine', 'ejs');

routes(app);

app.listen(port,'0.0.0.0');
