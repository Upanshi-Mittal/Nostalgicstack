const express=require('express');
const router=express.Router();
const {signvalidation,loginvalidation}=require("../Middlewares/validation");
const {signup,login}=require("../Controllers/authcontroller");

router.post('/login',loginvalidation,login);
router.post('/signup',signvalidation,signup);

module.exports=router;