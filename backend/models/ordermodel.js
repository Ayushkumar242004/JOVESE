const mongoose=require('mongoose')

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    mentroName: {
        type: String,
        required: true,
    },
    courseName: {
        type: String,
        required: true,
    },
    coursePrice:{
        type: Number,
        required: true,
    },
    discount:{
        type: Number,
        required: true,
    },
    finalPrice:{
        type:Number,
        required:true,
    }


});

module.exports=mongoose.model("order",orderSchema)