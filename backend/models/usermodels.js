const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword:{
    type: String,
  },
  profileLink:{
    type:String,
  }
  ,
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"], // Assuming a predefined set of genders

  },
  country: {
    type: String,

  },
  workExperiences: {
    type: Number,

  },
  github: { 
    type: String, 
    match: /https?:\/\/(www\.)?github\.com\/.+/, // Basic GitHub URL validation
  },
  linkedIn: {
    type: String,
    match: /https?:\/\/(www\.)?linkedin\.com\/.+/, // Basic LinkedIn URL validation
  },
  twitter: {
    type: String,
    match: /https?:\/\/(www\.)?twitter\.com\/.+/, // Basic Twitter URL validation
  },
  role: {
    type: String,
    required: true,
    enum: ["User", "Mentor", "Admin"],
    default: "User",
  },
});

// Pre-save hook to hash the password before saving
userSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
  } catch (error) {
    next(error);
  }
});

// Method to validate password
userSchema.methods.isPasswordValid = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Method to generate JWT token
userSchema.methods.generateToken = async function () {
  try {
    const token = jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        role: this.role,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn:"30d",
      }
    );
    return token;
  } catch (error) {
    console.error("Error generating token", error);
    throw error;
  }
};

module.exports = mongoose.model("User", userSchema);

