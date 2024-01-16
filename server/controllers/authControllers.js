const User = require('../models/User')
const jwt = require('jsonwebtoken')
const login =(req,res)=>{
    let {firstName,uidaiNo} = req.body
    console.log(req.body)
    User.find({firstName,uidaiNo}).then((result)=>{
        const token = jwt.sign({firstName},process.env.JWT_SECRET,{expiresIn:'2h'})
        res.json({"token":token})
    }).catch(()=>{
        res.json({"message":'user not exist'})
    })
}
module.exports = {login}   