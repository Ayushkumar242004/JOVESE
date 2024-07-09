const mongoose=require('mongoose')


const applicationSchema = new mongoose.Schema({
  username: {
    type: String,
    required:true,
  },
  email: {
    type: String,
    required:true,
  },
  coverLetter: {
    type: String,
    required:true,
  },
  mobile: {
    type: Number,
    required:true,
  },
  address: {
    type: String,
    required:true,
  },
  resume: {
    public_id: {
      type: String, 
      required: true,
    },
    url: {
      type: String, 
      required: true,
    },
  },
  applicantID: {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: String,
      enum: ["mentor"],
      required: true,
    },
  },
  ismentor:{
    type:Boolean,
    default:false
  }
});

export const Application = mongoose.model("Application", applicationSchema);
