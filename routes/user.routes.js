const express = require('express')
const userModel = require('../model/user')
const Router = express.Router()

Router.get('/register',(req,res)=>{
    res.render('register.ejs')
})
Router.post('/register',async(req,res)=>{
    const {email,username,url} = req.body
    const newUser = await userModel.create({
        email,
        username,
        url
    })
    res.redirect('/user/display')
})

Router.get('/display',async(req,res)=>{
    let users = await userModel.find()
    res.render('display.ejs',{users:users});
})

Router.get('/delete/:id',async(req,res)=>{
    await userModel.findOneAndDelete({_id: req.params.id})
    res.redirect('/user/display');
})

Router.get('/edit/:id',async(req,res)=>{
    let user = await userModel.findOne({_id:req.params.id})
    res.render("edit.ejs",({user}))
})

Router.post('/update/:id',async(req,res)=>{
    let{username,email,url} = req.body;
    await userModel.findOneAndUpdate({_id:req.params.id},{username,email,url},{new:true});
    res.redirect('/user/display');
})

module.exports = Router