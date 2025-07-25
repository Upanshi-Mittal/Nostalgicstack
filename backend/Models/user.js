const mongoose=require('mongoose');

const userschema=new mongoose.Schema({
    name:{type:String ,
        required:true
    },

    email:{type:String ,
        required:true,
        unique:true
    },

    password:{type:String ,
        required:true
    }
})

const blogSchema=new mongoose.Schema({
    date:Date,
    title:String,
    content:String  
})
const usermodel=mongoose.model('user',userschema)
const blogmodel=mongoose.model('blog',blogSchema)
module.exports={usermodel,blogmodel};