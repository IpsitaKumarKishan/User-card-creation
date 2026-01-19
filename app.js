const express = require('express');
const app = express();
const userModel = require('./model/user')
const dbConnection = require('./config/db')
const userRouter = require('./routes/user.routes')

app.set("view engine",'ejs')
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/user',userRouter);

app.get('/',(req,res)=>{
    res.redirect('/user/display');
})

app.get('/user',(req,res)=>{
    res.redirect('/user/display');
})

app.listen(3000);