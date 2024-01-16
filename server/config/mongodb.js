const mongoose = require('mongoose');
const db = mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('connected to the db')
}).catch(()=>{
    console.log('Error connecting to db')
});
module.exports = db;