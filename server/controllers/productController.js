const Product = require('../models/Products')


const getAllProducts = (req,res)=>{
    Product.find().then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.json(err)
    })
}
const createAllProducts = (req,res)=>{

    const newProduct = new Product(req.body);
    newProduct.save().then(()=>{
        res.json({message:"Product Created successfully"})
    }).catch(()=>{
        res.json({message:"error creating products"})
    })
}
module.exports = {
    getAllProducts,createAllProducts
}