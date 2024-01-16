const User = require('../models/User')
const getAllUsers = (req,res)=>{
    //get the stored data in database
    User.find().then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.json(err)
    });
}
const createAllUsers = (req,res)=>{
   // const newUser = new User({
    //    firstName:"test",
   //     lastName:"user",
   //     uidaiNo:12233444
    //});
    //newUser.save();
   // res.json({message:"user created"})
    //sending data to the database
    const {firstName,lastName,uidaiNo} = req.body
    console.log(req.body)
    const newUser = new User({
        firstName,
        lastName,
        uidaiNo
    });
    newUser.save().then(()=>{
        res.json({message:"user created successfully"})
    }).catch((err)=>{
        res.json({message:"error saving the data"})
    })
    //res.json({message:"user created successfully"})
}
module.exports = {
    getAllUsers,createAllUsers
}