'use strict';

// 모듈
const express = require('express');
const app = express();

//라우팅
const home = require('./routes/home')

// 앱 세팅
app.set('views', './views');
app.set('view engine', 'ejs');

app.use("/", home) // use => 미들웨어를 등록해주는 메서드. app.get 과는 달리 라우팅 부분이기 때문에 미들웨어로 등록하는 것이다.

module.exports = app;