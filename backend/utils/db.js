require('dotenv').config();
const mongoose=require('mongoose')

const URI=process.env.MONGOURI


const connectDB=async ()=>{
   try {
        mongoose.connect(URI);
        console.log("MongoDb Connected...");
        
   } catch (error) {
        console.log("Failed");
        process.exit(0);
   }
}

module.exports=connectDB