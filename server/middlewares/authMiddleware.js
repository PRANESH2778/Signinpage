const jwt = require('jsonwebtoken')
const verifyToken = (req,res,next)=>{
    //if token is present
    const token = req.headers['authorization']
    if(token){
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        console.log(decoded)
        if(decoded){
            next();
        }
        else{
        res.json({"message":"Invalid token"})
        }
    }
    //invalid taken
    else
    {
    res.json({"message":"protected routers!!, need a valid token"})
    }
}
module.exports = verifyToken