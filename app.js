/*
 * app.js
 * Copyright (C) 2018 disoul <disoul@DiSouldeMacBook-Pro.local>
 *
 * Distributed under terms of the MIT license.
 */
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');
const app = express();

//设置跨域访问
// app.all('*', function(req, res, next) {
//    res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Control-Allow-Headers", "X-Requested-With");
//    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//    res.header("X-Powered-By",' 3.2.1');
//    res.header("Content-Type", "application/json;charset=utf-8");
//    next();
// });


const options = {
  key: fs.readFileSync('ssl/1561172_live.itcnyz.com.key'),
  cert: fs.readFileSync('ssl/1561172_live.itcnyz.com.pem')
};



app.use(bodyParser.json());
app.use('/wechat', require('./routers/wechat'));
app.use('/pili', require('./routers/pili'));


//获取资源路径
//    var realpath = __dirname + '/';
//
//    //加载需要显示的图片资源
//    if (type == '.jpg') {
//        res.writeHead(200, { 'Content-Type': 'text/'+type });
//        res.end(fs.readFileSync(realpath + 'a.jpg'));
//    }
//
//    //加载静态html文件
//    if (req.url == "/") {
//        res.writeHead(200, { 'Content-Type': 'text/html' });
//        res.end(fs.readFileSync(__dirname + '/a.html'));
//    }
// app.use('/a', require('./a.html'));

const server = https.createServer(options, app)
// const server = http.createServer(app);

module.exports = server;
