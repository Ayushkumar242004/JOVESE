const jwt = require('jsonwebtoken');
const userModel = require('../models/usermodels');

const authMiddleware = async (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(401).json({ message: "Unauthorized HTTP, Token not provided" });
    }

    const token = authHeader.replace("Bearer", "").trim();
    if (!token) {
        return res.status(401).json({ message: "Unauthorized HTTP, Token not provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        
        const userData = await userModel.findOne({ email: decoded.email }).select({ password: 0 });
        if (!userData) {
            return res.status(401).json({ message: "Unauthorized HTTP, User not found" });
        }

        req.user = userData;
        req.token = token;
        req.userID = userData._id;

        next();
    } catch (error) {
        console.error("Error from authMiddleware:", error);
        return res.status(403).json({ message: "Invalid token" });
    }
}

module.exports = authMiddleware;
