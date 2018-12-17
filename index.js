/*
 * index.js
 * Copyright (C) 2018 disoul <disoul@DiSouldeMacBook-Pro.local>
 *
 * Distributed under terms of the MIT license.
 */
const app = require('./app');

const mongoose = require('mongoose');
var debug = require('debug')('practice-mock:server');
var http = require('http');
var https = require('https');
var fs = require('fs');

/**
 * Get port from environment and store in Express.
 */

// var port = normalizePort(process.env.PORT || '443');
// app.set('port', port);

//此处读取文件名称更改成自己下载的证书名称， 将证书放置到对应的目录下
var pk = fs.readFileSync('ssl/1561172_live.itcnyz.com.key');
var pc = fs.readFileSync('ssl/1561172_live.itcnyz.com.pem');
var opt = {
  key: pk,
  cert: pc
}


/**
 * Create HTTP server.
 */

var httpServer = http.createServer(app);
var httpsServer = https.createServer(opt,app);

/**
 * Listen on provided port, on all network interfaces.
 */

// server.listen(port);
// server.on('error', onError);
// server.on('listening', onListening);


//可以分别设置http、https的访问端口号
var PORT = 8686;
var SSLPORT = 443;


//创建http服务器
httpServer.listen(PORT, function() {
    console.log('HTTP Server is running on: http://localhost:%s', PORT);
});

//创建https服务器
httpsServer.listen(SSLPORT, function() {
    console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
});

//可以根据请求判断是http还是https
app.get('/', function (req, res) {
    if(req.protocol === 'https') {
        res.status(200).send('This is https visit!');
    }
    else {
        res.status(200).send('This is http visit!');
    }
});

mongoose.connect('mongodb://127.0.0.1:27017/newDatabase',{useNewUrlParser:true}).catch(console.log);

app.listen(8686, () => { console.log('listening on 8686') });
