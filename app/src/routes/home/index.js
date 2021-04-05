'use strict';

const express = require('express');
const router = express.Router(); // 라우터 부분이기 때문에 app 이 아니라 router를 불러오는 것이다.

const ctrl = require('./home.ctrl');

router.get('/', ctrl.home);
router.get('/login', ctrl.login);

module.exports = router;