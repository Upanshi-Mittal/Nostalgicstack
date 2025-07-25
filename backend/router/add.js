const express = require('express');
const router = express.Router();
const { blogmodel } =require( '../Models/user');

const Add=async(req,res)=>{
    try {
        const { title, content, date } = req.body;
        const check=await blogmodel.findOne({title});
        if(check){
            return res.status(409).json({message:"Blog already exist"});
        }
        const blog = new blogmodel({
            title,
            content,
            date: date || new Date()
        });

        await blog.save();
        res.status(200).json({ message: "Blog saved", blog });
    } catch (error) {
        res.status(500).json({ message: "Failed to save blog", error });
    }
}

module.exports=Add