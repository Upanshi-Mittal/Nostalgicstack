const express = require ('express');
const app=express();
require('dotenv').config();
require('./Models/db');
const Port=process.env.PORT||8080;
const cors=require('cors')
const session = require("express-session");
app.get('/pin',(req,res)=>{
    res.send("PONG")
})
app.use(session({
  secret: ' JWT_SECRET',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 // 1 day
  }
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use('/auth',require("./router/authroute"));
app.use('/products',require("./router/productRouter"));
app.listen(Port,()=>{
    console.log("hiiiiiii");
})
