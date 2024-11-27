const express = require('express')
const jsonwebtoken=require('jsonwebtoken')
const app=express()
app.post('/signin',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    // verify response from database;
    // if user is verified then return token;
    // else return json wrong input

})
app.post('/signup',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    // Generate a Token 
})
app.get('/me',(req,res)=>{
        const user=req.user;
        res.send({
            username:user.username
        })
})