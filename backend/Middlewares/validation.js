const joi=require('joi');

const signvalidation=(req,res,next)=>{
    const schema=joi.object({
        name: joi.string().min(3).max(100).required(),
        email:joi.string().max(100).required(),
        password:joi.string().min(3).max(100).required()
    })
    const{error}=schema.validate(req.body);
    if(error){
        return res.status(404).json({message:"bad request"})
    }
    console.log("Request Body:", req.body);
    next();

}

const loginvalidation=(req,res,next)=>{
    const schema=joi.object({
        email:joi.string().max(100).required(),
        password:joi.string().min(3).max(100).required()
    })
    const{error}=schema.validate(req.body);
    if(error){
        return res.status(404).json({message:"bad request"})
    }
    console.log("Request Body:", req.body);
    next();

}

module.exports={signvalidation,loginvalidation}