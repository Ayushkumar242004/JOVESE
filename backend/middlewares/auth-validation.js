const jwt = require('jsonwebtoken');
const userModel = require('../models/usermodels'); // Adjust the path to your user model

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
      return res.status(401).json({ message: "Unauthorized HTTP, Token not provided" });
    }

    const token = authHeader.split(' ')[1];
    // console.log('Received token:', token); // Log the token for debugging

    if (!token || token === 'null' || token === 'undefined') {
      // console.log('Received token:', token);
      return res.status(401).json({ message: "Unauthorized HTTP, Invalid token" });
  }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const userData = await userModel.findOne({ email: decoded.email }).select({ password: 0 });
    // console.log('User Data:', userData);

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
};

module.exports = authMiddleware;
