const express = require('express');
const app = express();

app.get('/',async (req,res,next)=>{
    try{
        let response = await asyncOperation();
        console.log(response)
    }catch(error){
        next(error);
    }
})
function asyncOperation(){
    throw new Error("error occured")
}
app.use((err,req,res,next)=>{
    console.log('an error occured at async operation')
    res.status(500).send('internal server error')
})

app.listen(3000,()=>{
    console.log('server started')
})