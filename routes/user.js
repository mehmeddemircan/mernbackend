const express = require('express');
const { register, login, forgotpassword } = require('../controllers/user');
// modelName should be replaced here with your choice
const User = require('../models/User');

const router = express.Router();

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/forgotpassword').post(forgotpassword)
router.route('/resetpassword/').post()
module.exports = router;