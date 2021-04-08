'use strict';

// 모듈
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config();

const accessLogStream = require('./src/config/log');

//라우팅
const home = require('./src/routes/home');

// 앱 세팅
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json()); // bodyParser가 json 데이터를 가져올 수 있도록 명시
app.use(bodyParser.urlencoded({ extended: true })) // URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(morgan('dev'));
app.use(morgan('common', { stream: accessLogStream }));
app.use("/", home); // use => 미들웨어를 등록해주는 메서드. app.get 과는 달리 라우팅 부분이기 때문에 미들웨어로 등록하는 것이다.

module.exports = app;