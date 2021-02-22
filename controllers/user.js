const User = require('../models/User')


exports.register = async (req,res,next)=> {
    const {username,email,password }= req.body 
    

    try {
        const user = await User.create({
            username,
            email,
            password
        })
        user.save()

        res.status(201).json({
            success: true ,
            message  : "Successfully created account ",
            user
        })
        

    } catch (error) {
        res.status(401).json({
            success: false ,
            error : error.message
        })
    }
}
exports.login = async (req,res,next)=> {
    res.send("login post route")
}
exports.forgotpassword = async (req,res,next)=> {
    res.send("forgotpassword post route")
}
exports.resetpassword = async (req,res,next)=> {
    res.send("resetpassword route")
}