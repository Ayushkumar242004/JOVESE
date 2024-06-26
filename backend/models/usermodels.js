const mongoose=require('mongoose')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
})

userSchema.pre('save', async function(next) {
    const authentication = this;
    
    // If the password field has not been modified, skip hashing and continue with the save
    if (!authentication.isModified("password")) {
        return next();
    }
    // console.log("log");
    // Try hashing the password before saving
    try {
        const hash = await bcrypt.hash(authentication.password, 10);
        authentication.password = hash;
        next(); // Proceed to save the user document
    } catch (error) {
        next(error); // Pass any errors to the next middleware
    }
});

userSchema.methods.isPasswordValid=async function(password){
    return bs.compare(password,this.password);
}

userSchema.methods.generateToken =function(){
    try {
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin,
        },
        process.env.JWT_SECRET_KEY
        );
    } catch (error) {
        console.log(error);
    }
};
module.exports= mongoose.model('authentication',userSchema)