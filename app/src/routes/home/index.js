'use strict';

const express = require('express');
const router = express.Router(); // 라우터 부분이기 때문에 app 이 아니라 router를 불러오는 것이다.

const ctrl = require('./home.ctrl');

router.get('/', ctrl.output.home);
router.get('/login', ctrl.output.login);
router.get('/register', ctrl.output.register);
router.post('/login', ctrl.process.login);

module.exports = router;