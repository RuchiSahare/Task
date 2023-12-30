const express = require('express');
const app = express();
const bodyParser =  require('body-parser');
const jwt = require('jsonwebtoken');
const Approute = require('./router/approuter.js')

app.use(approute,'Approute');

module.exports = app;


