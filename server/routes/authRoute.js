const express = require( 'express' );
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const session = require('express-session')
const config = require('../config.json');
  
  
const user = require('../models/User');
const authRoute = express.Router();

authRoute.post('/login', async (req, res) => {
    try {
        const { email, password, role } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({
                status: false,
                message: "All fields are required"
            });
        }

        // Find the user by email
        const foundUser = await user.findOne({ email });

        const foundUserWithRole = await user.find({ email: email, role: role });

        if (!foundUser) {
            return res.status(404).json({
                status: false,
                message: "User not found"
            });
        }


        if (foundUser.role !== role) {
            return res.status(403).json({
                status: false,
                message: "You are not authorized to access this page"
            });
        }

        

        // Compare passwords
        const passwordMatch = await bcrypt.compare(password, foundUser.password);

        // If passwords don't match, return 401
        if (!passwordMatch) {
            return res.status(401).json({
                status: false,
                message: "Invalid email or password"
            });
        }

        // If user found and passwords match, generate and send JWT token
        if (foundUser.role == role) {
            const token = jwt.sign({ userId: foundUser._id, userRole: foundUser.role }, config.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({
                status: true,
                message: "Login successful",
                token: token
            });
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: false,
            message: "Internal Server Error"
        });
    }
});


authRoute.post('/logout', async (req, res) => {
    try {
        // Extract the token from the request headers
        const token = req.headers.authorization;

        // Check if the token exists
        if (!token) {
            return res.status(401).json({ success: false, message: 'No token provided' });
        }

        // Decode the token to get user information
        const decoded = jwt.verify(token, config.JWT_SECRET);

        // Logout the user by invalidating the token
        // Alternatively, you can clear session data or perform any other necessary actions
        // For JWT, you can just invalidate the token by not using it anymore
        // There's no need to explicitly remove it from the client-side as it's stateless

        // Respond with success message
        res.json({ success: true, message: 'Logged out successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});


authRoute.get('/verify-token', async (req, res) => {
    const token = req.headers.authorization;
    const role = req.headers.role;

    if (!token) {
        return res.status(401).json({ status: false, message: 'Unauthorized: No token provided' });
    }

    // Verify the token
    jwt.verify(token.split(' ')[1], config.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ status: false, message: 'Unauthorized: Invalid token' });
        }

        const { userRole } = decoded;
        if (userRole !== role) { // Change 'admin' to the required role
            return res.status(403).json({ status: false, message: 'Forbidden: Insufficient permissions' });
        }

        req.userId = decoded;
        return res.status(200).json({ status: true, userId: decoded });
    });
});

module.exports = authRoute;