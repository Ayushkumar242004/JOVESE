const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
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
    role: {
        type: String,
        required: true,
        enum: ["User", "Mentor", "Admin"],
        default: "User",
    },
});

// Pre-save hook to hash the password before saving
userSchema.pre('save', async function(next) {
    const user = this;
    
    if (!user.isModified('password')) {
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
userSchema.methods.isPasswordValid = async function(password) {
    return bcrypt.compare(password, this.password);
};

// Method to generate JWT token
userSchema.methods.generateToken = function() {
    try {
        const token = jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            role: this.role,
        },
        process.env.JWT_SECRET_KEY
        );
        return token;
    } catch (error) {
        console.error('Error generating token', error);
        throw error;
    }
};

module.exports = mongoose.model('User', userSchema);
