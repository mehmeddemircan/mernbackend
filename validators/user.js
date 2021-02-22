const {check, validationResult} = require('express-validator')

exports.validateRegisterRequest = [
    check('username').notEmpty().withMessage("Username is required"),
    check('username').isLength({min: 3 , max: 20}).withMessage("Username must be between 3 and 20 character long"),
    check('email').isEmail().withMessage("Valid email is required"),
    check('password').isLength({min: 6}).withMessage("password must be at least  6 character long")
]
exports.validateLoginRequest= [
    check('email').isEmail().withMessage("Valid email is required"),
    check('password').isLength({min: 6}).withMessage("password must be at least  6 character long")
]
exports.forgotpassword = []
exports.resetpassword = []