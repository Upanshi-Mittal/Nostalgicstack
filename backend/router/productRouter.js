const express=require('express');
const router=express.Router();
const auth=require("../Middlewares/auth");

router.get('/',auth,(req,res)=>{
    console.log('....logged in',req.user);
    res.status(200).json([{
        name:"mobile",
        price:1000
    },
    {
        name:"laptop",
        price:2000
    }]
)
})

module.exports=router;