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
        const {username,email,password}=req.body;
        // if(password.toString()!==confirmPassword.toString()){
        //     res.status(400).json({message:"Confirm password is different from password"})
        // }
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
            userId: userCreated._id.toString(),
        });


    } catch (error) {
        res.status(500).json("controller server error");
    }
}
const userdata=(req,res)=>{
    try {

        // const authHeader = req.header('Authorization');
        // console.log(authHeader);

        // if (!authHeader) {
        //     return res.status(401).json({ message: "Unauthorized HTTP, Token not provided" });
        // }

        // const token = authHeader.split(' ')[1];
        // if (!token || token === 'null' || token === 'undefined') {
        //     console.log('Received token:', token);
        //     return res.status(401).json({ message: "Unauthorized HTTP, Invalid token" });
        // }
        const userData=req.user;
        if(!userData) return res.status(401).json({ message: "Unauthorized HTTP, Token not provided" });
        return res.status(200).json({ userData });  
    } catch (error) {userObject
        console.log(`Error form user route ${error}`);
    }
}

const login= async (req,res)=>{
    try {
        const {email,password}=req.body;
        
        const userExist= await collection.findOne({email});
        
        if(!userExist){
            res.status(400).json({message:"User not found"})
        }

        const validpass= await userExist.isPasswordValid(password);
        // console.log(validpass);
        if(validpass){
            res.status(200).json({
                msg:"Login successful",
                token: await userExist.generateToken(),
                userId: userExist.toString(),
            });
        }else{
            res.status(400).json({message:"Invalid password"})
        }
    } catch (error) {
        res.status(500).json("Internal server error");
    }
}

const profileupdate=async(req,res)=>{
    try {
        // console.log(req.body);
        const userid=req.userID;
        const updateuseredata=req.body;

        const updatedata=await collection.updateOne(
            {_id:userid},
            {$set:updateuseredata}
        )
        return res.status(200).json({msg:"Profile Updated Successfully"});
    } catch (error) {
        console.log(error);
    }
}
module.exports={home,signup,userdata,login,profileupdate}