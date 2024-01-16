const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
})
const User = mongoose.model('User',userSchema)
mongoose.connect('mongodb://localhost:27017/async')
//using async
.then(async ()=>{
    console.log('connected');
    //using error
    try{
          //using await
        const users = await User.find();
        console.log(users)
    }catch(err){
        console.log('error in data')
    }
  
}).catch(()=>{
    console.log('error')
})