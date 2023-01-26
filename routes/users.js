const express = require('express');
const router = express.Router();
const { userValidationRUles } = require('../middleware/validateUser');
const { createUser } = require('../controller/users');

router.post('/', userValidationRUles(), createUser);

module.exports = router;
