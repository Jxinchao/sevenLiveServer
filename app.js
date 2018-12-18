/*
 * app.js
 * Copyright (C) 2018 disoul <disoul@DiSouldeMacBook-Pro.local>
 *
 * Distributed under terms of the MIT license.
 */
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();


const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('ssl/1561172_live.itcnyz.com.key'),
  cert: fs.readFileSync('ssl/1561172_live.itcnyz.com.pem')
};

// https.createServer(options, function(req, res) {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   console.log('listening on 8686')
//   res.end('Hello World\n');
// }).listen(8686);



app.use(bodyParser.json());
app.use('/wechat', require('./routers/wechat'));
app.use('/pili', require('./routers/pili'));

const server = https.createServer(app);

module.exports = server;
