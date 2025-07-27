const express = require("express");
const router = express.Router();
const { blogmodel } = require("../Models/user");
const auth = require("../Middlewares/auth");
const Likes=async(req,res)=>{
    try{
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({ message: "User not logged in." });
}

    const blog=await blogmodel.findById(req.params.id);
    const like=blog.likedBy.includes(userId);
    if(!like){
        blog.likedBy.push(userId);
        blog.likes=blog.likes+1;
        await blog.save();
        res.status(200).json({message:"liked"});
    }else{
       blog.likedBy = blog.likedBy.filter((id) => id.toString() !== userId);
        blog.likes=blog.likes-1;
        await blog.save();
        res.status(200).json({message:"unliked"});
    }
    }
    catch(error){
        console.error("LIKE ERROR:",error.message);
        res.status(500).json({ message: "Failed to like blog", error: error.message });
    }
    
}

module.exports=Likes;