const collection=require('../models/usermodels')
const bcrypt=require('bcrypt')
const home=(req,res)=>{
    try {
        res.send({msg:'hello home'});
    } catch (error) {
        console.log(error);
    }
}

const signup=async (req,res)=>{
    try{
        const {username,email,password,confirmPassword}=req.body;
        if(password.toString()!==confirmPassword.toString()){
            res.status(400).json({message:"Confirm password is different from password"})
        }
        const userExist= await collection.findOne({email});

        if(userExist){
            res.status(400).json({message:"You have an account already you can Login instead "})
        }
        // console.log("dum");
        const userCreated= await collection.create({
            username,
            email,
            password,
        })
        
        res.status(201).json({
            msg: "Registration succssful",
            token: await userCreated.generateToken(),
            userId: userCreated.toString(),
        });


    } catch (error) {
        res.status(500).json("controller server error");
    }
}
const userdata=(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
    }
}

const login=(req,res)=>{
    try {
        const {email,password}=req.body
        const userExist=collection.findOne({email})
        if(!userExist){
            res.status(400).json({message:"User not found"})
        }
    } catch (error) {
        console.log(error);
    }
}
module.exports={home,signup,userdata,login}