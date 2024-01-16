const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config(); 
const db = require('./config/mongodb');
const verifyToken = require('./middlewares/authMiddleware')
const sampleMiddleware = require('./middlewares/sampleMiddleware')
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const port = 1000;

//middleware to parse the data coming in request
app.use(express.json());
app.use(cors());
//2 routes = 1.user routes,2.product routes
app.use('/auth',authRoutes);
app.use('/users',verifyToken, userRoutes);
app.use('/products',verifyToken,productRoutes);
app.get('/',sampleMiddleware,(req,res)=>{
    res.send('Hello world! welcome to the server')
})

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
}) 