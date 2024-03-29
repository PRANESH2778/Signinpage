const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        default:""
    },
    price:{
        type:Number,
        required:true
    }
})
const Product = mongoose.model('Product',productSchema)
module.exports = Product