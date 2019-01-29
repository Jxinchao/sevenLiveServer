/*
 * index.js
 * Copyright (C) 2018 disoul <disoul@DiSouldeMacBook-Pro.local>
 *
 * Distributed under terms of the MIT license.
 */
const app = require('./app');

const mongoose = require('mongoose');
// const https = require('https');
// const fs = require('fs');
//
// const options = {
//   key: fs.readFileSync('ssl/1561172_live.itcnyz.com.key'),
//   cert: fs.readFileSync('ssl/1561172_live.itcnyz.com.pem')
// };
//
// https.createServer(options, function(req, res) {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   console.log('listening on 8686')
//   res.end('Hello World\n');
// }).listen(8686)
// 120.79.168.209
// 'mongodb://127.0.0.1:27017/newDatabase

mongoose.connect('mongodb://127.0.0.1:27017/test',{useNewUrlParser:true}).catch(console.log);

app.listen(8686, () => { console.log('listening on 8686') });
