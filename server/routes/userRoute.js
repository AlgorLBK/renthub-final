const express = require( 'express' );
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config.json');
  
  
const User = require('../models/User');
const userRoute = express.Router();


userRoute.post('/register', async(req, res) => {
    try {
        let name = req.body.name;
        let username = req.body.username;
        let  email = req.body.email;
        let  phone = req.body.phone;
        let password = req.body.password;
        let confirmPassword = req.body.confirmPassword;
        let role = req.body.role;

        if (!name || !username || !email || !phone || !password || !confirmPassword) {
            return res.status(404).json({
                status: false,
                message: "All fields are required"
            });
        } else if (!validateEmail(email)) {
            return res.status(400).json({
                status: false,
                message: "Invalid email"
            });
        }
        else if (req.body.password !== req.body.confirmPassword) {
            return res.status(400).json({
                status: false,
                message: "Passwords do not match"
            });
        } else if (await User.findOne({ username: username })) {
            return res.status(400).json({
                status: false,
                message: "User already exists"
            });
        }  else if (await User.findOne({ email: email })) {
            return res.status(400).json({
                status: false,
                message: "User already exists"
            });
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({
                name: name,
                username: username,
                email: email,
                phone: phone,
                password: hashedPassword,
                role: role,
               
            });
    
            await newUser.save();
    
            res.status(201).json({
                status: true,
                message: "User registered successfully"
            });
        }

        //const { name, username, email, phone, password, confirmPassword, role} = req.body
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

userRoute.get('/verify-token', async (req, res) => {
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


userRoute.post('/login', async (req, res) => {
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
        const foundUser = await User.findOne({ email });

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


userRoute.get('/single/:id', async (req, res) => {
    try {
        const userId = req.params.id;

        // Find the user by ID
        const getUser = await User.findById(userId).select('-__v -password');

        // Check if user exists
        if (!getUser) {
            return res.status(404).json({ message: "User not found" });
        }

        // User found, send user data
        return res.status(200).json({ user: getUser });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "An error occurred while fetching the user" });
    }
});



userRoute.get('/tenants', async (req, res) => {
    try {
        const tenants = await User.find({ role: 'tenant' });
        res.status(200).json({ status: true, message: 'Tenants fetched successfully', tenants });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: "Internal Server Error" });
    }
});





function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

module.exports = userRoute;

