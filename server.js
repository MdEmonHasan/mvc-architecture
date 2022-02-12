const { urlencoded } = require('body-parser');
const express = require('express');
const userRouter = require('./router/users.rout');

const app = express();
const PORT = 3000;
app.use(urlencoded({extended: true})); 


app.use(userRouter)



app.listen(PORT,()=>{
    console.log("server start on 3000");
})